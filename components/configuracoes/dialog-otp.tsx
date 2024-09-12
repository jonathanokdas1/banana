import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdRefresh } from "react-icons/md"; // Ícone para "Reenviar Código"

export const DialogOtp = ({
  isOpen,
  onClose,
  isEmailOtpSent,
  isWhatsappOtpSent,
  emailCode,
  smsCode,
  setEmailCode,
  setSmsCode,
  handleVerifyEmailOtp,
  handleVerifyWhatsappOtp,
  handleResendOtp,
}) => {
  const handleEmailOtpChange = (value, index) => {
    let newCode = emailCode.split("");
    newCode[index] = value;
    setEmailCode(newCode.join(""));
  };

  const handleSmsOtpChange = (value, index) => {
    let newCode = smsCode.split("");
    newCode[index] = value;
    setSmsCode(newCode.join(""));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <h2>Verificação de Código</h2>
          <DialogDescription>Insira o código enviado para verificação.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {isEmailOtpSent && (
            <>
              <label className="block text-sm font-medium text-gray-500">Código enviado para o e-mail</label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} value={emailCode[0]} onChange={(value) => handleEmailOtpChange(value, 0)} />
                  <InputOTPSlot index={1} value={emailCode[1]} onChange={(value) => handleEmailOtpChange(value, 1)} />
                  <InputOTPSlot index={2} value={emailCode[2]} onChange={(value) => handleEmailOtpChange(value, 2)} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} value={emailCode[3]} onChange={(value) => handleEmailOtpChange(value, 3)} />
                  <InputOTPSlot index={4} value={emailCode[4]} onChange={(value) => handleEmailOtpChange(value, 4)} />
                  <InputOTPSlot index={5} value={emailCode[5]} onChange={(value) => handleEmailOtpChange(value, 5)} />
                </InputOTPGroup>
              </InputOTP>
              <Button className="mt-2" onClick={handleVerifyEmailOtp}>
                Verificar Código do E-mail
              </Button>
              <Button variant="outline" className="mt-2 flex items-center gap-2" onClick={() => handleResendOtp("email")}>
                <MdRefresh className="h-4 w-4" /> Reenviar Código
              </Button>
            </>
          )}

          {isWhatsappOtpSent && !isEmailOtpSent && (
            <>
              <label className="block text-sm font-medium text-gray-500">Código enviado por SMS</label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} value={smsCode[0]} onChange={(value) => handleSmsOtpChange(value, 0)} />
                  <InputOTPSlot index={1} value={smsCode[1]} onChange={(value) => handleSmsOtpChange(value, 1)} />
                  <InputOTPSlot index={2} value={smsCode[2]} onChange={(value) => handleSmsOtpChange(value, 2)} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} value={smsCode[3]} onChange={(value) => handleSmsOtpChange(value, 3)} />
                  <InputOTPSlot index={4} value={smsCode[4]} onChange={(value) => handleSmsOtpChange(value, 4)} />
                  <InputOTPSlot index={5} value={smsCode[5]} onChange={(value) => handleSmsOtpChange(value, 5)} />
                </InputOTPGroup>
              </InputOTP>
              <Button className="mt-2" onClick={handleVerifyWhatsappOtp}>
                Verificar Código do WhatsApp
              </Button>
              <Button variant="outline" className="mt-2 flex items-center gap-2" onClick={() => handleResendOtp("whatsapp")}>
                <MdRefresh className="h-4 w-4" /> Reenviar Código
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
