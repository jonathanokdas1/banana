"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { DialogOtp } from "@/components/configuracoes/dialog-otp";
import cep from "cep-promise"; // Biblioteca para buscar CEP

export const DialogEditar = ({ email, whatsapp, setEmail, setWhatsapp }) => {
  const [cepValue, setCepValue] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [manual, setManual] = useState(false);
  const [smsCode, setSmsCode] = useState(""); // Código SMS
  const [emailCode, setEmailCode] = useState(""); // Código do E-mail
  const [isEmailOtpSent, setIsEmailOtpSent] = useState(false); // OTP para o e-mail
  const [isWhatsappOtpSent, setIsWhatsappOtpSent] = useState(false); // OTP para o WhatsApp
  const [isEmailVerified, setIsEmailVerified] = useState(false); // Verificação de e-mail
  const [isWhatsappVerified, setIsWhatsappVerified] = useState(false); // Verificação de WhatsApp
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false); // Estado do dialog de OTP
  const [isAddressChanged, setIsAddressChanged] = useState(false); // Controle de alterações no endereço

  const { showToast } = useToast({ className: "z-[9999]" }); // Toast com z-index alto

  // Função para buscar o endereço utilizando o cep-promise
  const buscarEnderecoPorCep = async (cepInput) => {
    try {
      const endereco = await cep(cepInput);
      setRua(endereco.street);
      setBairro(endereco.neighborhood);
      setCidade(endereco.city);
      setEstado(endereco.state);
      setIsAddressChanged(true); // Marca que o endereço foi alterado
    } catch (error) {
      showToast("CEP inválido ou não encontrado.");
    }
  };

  const handleCepChange = (e) => {
    const cepValue = e.target.value.replace(/\D/g, "");
    setCepValue(cepValue);
    if (cepValue.length === 8) buscarEnderecoPorCep(cepValue);
  };

  const handleManualFill = () => setManual(true);
  const handleAutoFill = () => setManual(false);

  const handleSendEmailOtp = () => {
    if (validateEmail(email)) {
      setIsEmailOtpSent(true);
      setIsWhatsappOtpSent(false);
      showToast("Código enviado para seu e-mail.");
      setIsOtpDialogOpen(true);
    }
  };

  const handleSendWhatsappOtp = () => {
    if (whatsapp) {
      setIsWhatsappOtpSent(true);
      setIsEmailOtpSent(false);
      showToast("Código enviado para seu número de WhatsApp.");
      setIsOtpDialogOpen(true);
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleWhatsappChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = `+55 (${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7, 11)}`;
    setWhatsapp(formattedValue);
  };

  const handleVerifyEmailOtp = () => {
    if (emailCode.length === 6) {
      setIsEmailVerified(true);
      showToast("E-mail verificado com sucesso!");
      setIsOtpDialogOpen(false);
    }
  };

  const handleVerifyWhatsappOtp = () => {
    if (smsCode.length === 6) {
      setIsWhatsappVerified(true);
      showToast("WhatsApp verificado com sucesso!");
      setIsOtpDialogOpen(false);
    }
  };

  // Habilitar o botão Salvar se o endereço foi alterado ou se o e-mail ou WhatsApp foram verificados
  const canSave = isEmailVerified || isWhatsappVerified || isAddressChanged;

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Atualizar perfil</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <h2>Atualizar Perfil</h2>
            <DialogDescription>Atualize suas informações de perfil e endereço.</DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="perfil">
            <TabsList>
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="endereco">Endereço</TabsTrigger>
            </TabsList>

            <TabsContent value="perfil">
              <div className="space-y-4">
                {/* E-mail */}
                <div>
                  <label className="block text-sm font-medium text-gray-500">E-mail</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="exemplo@dominio.com" />
                  <Button className="mt-2" onClick={handleSendEmailOtp} disabled={isEmailVerified}>
                    Atualizar E-mail
                  </Button>
                  {isEmailVerified && <p className="text-green-500 mt-2">E-mail verificado com sucesso!</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium text-gray-500">WhatsApp</label>
                  <Input type="tel" value={whatsapp} onChange={handleWhatsappChange} placeholder="+55 (99) 9 9999-9999" />
                  <Button className="mt-2" onClick={handleSendWhatsappOtp} disabled={isWhatsappVerified}>
                    Atualizar WhatsApp
                  </Button>
                  {isWhatsappVerified && <p className="text-green-500 mt-2">WhatsApp verificado com sucesso!</p>}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="endereco">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">CEP</label>
                  <Input type="text" value={cepValue} onChange={handleCepChange} placeholder="00000-000" />
                </div>

                {/* Campos preenchidos automaticamente ou manualmente */}
                {manual || rua ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Rua</label>
                      <Input type="text" value={rua} onChange={(e) => setRua(e.target.value)} disabled={!manual} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Número</label>
                      <Input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="Número da residência" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Bairro</label>
                      <Input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} disabled={!manual} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Cidade</label>
                      <Input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} disabled={!manual} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Estado</label>
                      <Input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} disabled={!manual} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500">Complemento</label>
                      <Input type="text" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Apartamento, bloco, etc." />
                    </div>
                  </>
                ) : null}

                {!manual ? (
                  <div className="text-right">
                    <button className="text-blue-500 text-sm underline" onClick={handleManualFill}>
                      Preencher manualmente
                    </button>
                  </div>
                ) : (
                  <div className="text-right">
                    <button className="text-blue-500 text-sm underline" onClick={handleAutoFill}>
                      Preencher automaticamente
                    </button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Botão Salvar */}
          <div className="mt-4 flex justify-end">
            <Button className="w-full" onClick={() => alert("Informações salvas!")} disabled={!canSave}>
              Salvar informações
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <DialogOtp
        isOpen={isOtpDialogOpen}
        onClose={() => setIsOtpDialogOpen(false)}
        isEmailOtpSent={isEmailOtpSent}
        isWhatsappOtpSent={isWhatsappOtpSent}
        emailCode={emailCode}
        smsCode={smsCode}
        setEmailCode={setEmailCode}
        setSmsCode={setSmsCode}
        handleVerifyEmailOtp={handleVerifyEmailOtp}
        handleVerifyWhatsappOtp={handleVerifyWhatsappOtp}
        handleResendOtp={() => showToast("Código reenviado!")}
      />
    </>
  );
};
