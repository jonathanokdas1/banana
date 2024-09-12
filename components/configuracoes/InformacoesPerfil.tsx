"use client";

import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Importando o Input correto do UI
import { Pencil } from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DialogEditar } from "@/components/configuracoes/dialog-editar"; // Importe o novo componente

export const InformacoesPerfil = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("jonat********************@gmail.com");
  const [whatsapp, setWhatsapp] = useState("+55 49 99915-4694");
  const isVerified = false; // Altere para `true` se a conta estiver verificada

  return (
    <Card className="w-full md:w-1/2 mx-auto p-6 flex flex-col items-center text-center">
      <div className="relative">
        {/* Avatar com imagem de preview ou padrão */}
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={previewImage || "https://via.placeholder.com/150"} alt="Foto de Perfil" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>

        {/* Ícone de editar sobreposto */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 p-1 bg-gray-800 text-white hover:bg-gray-700 rounded-full"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>

      {/* Nome */}
      <h2 className="text-xl font-bold">Jonathan Borges</h2>

      {/* Verificação com HoverCard */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="flex items-center justify-center gap-2 text-sm mt-1 cursor-pointer">
            {isVerified ? (
              <>
                <RiVerifiedBadgeFill className="text-blue-500 h-4 w-4" />
                <span className="text-blue-500">Conta verificada</span>
              </>
            ) : (
              <>
                <RiVerifiedBadgeFill className="text-gray-500 h-4 w-4" />
                <span className="text-gray-500">Conta pendente de verificação</span>
              </>
            )}
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="flex justify-between space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={previewImage || "https://via.placeholder.com/150"} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Jonathan Borges</h4>
              <p className="text-sm">{isVerified ? "Conta verificada com sucesso." : "Conta pendente de verificação."}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      {/* Informações da conta */}
      <div className="mt-6 w-full text-left">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">Nome Completo</label>
          <Input type="text" value="Jonathan Borges" disabled />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">E-mail</label>
          <Input type="email" value={email} disabled />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">WhatsApp</label>
          <Input type="tel" value={whatsapp} disabled />
        </div>
      </div>

      <CardFooter className="w-full mt-6">
        {/* Utilize o componente DialogEditar aqui */}
        <DialogEditar email={email} whatsapp={whatsapp} setEmail={setEmail} setWhatsapp={setWhatsapp} />
      </CardFooter>
    </Card>
  );
};
