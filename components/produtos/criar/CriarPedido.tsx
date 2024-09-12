"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog"; // Import Dialog Components
import { FileText, Briefcase, BookOpen } from "lucide-react";
import CriarEbook from "@/components/produtos/criar/CriarEbook";
import CriarServiço from "@/components/produtos/criar/CriarServiço";
import CriarCurso from "@/components/produtos/criar/CriarCurso";

export default function CriarPedido() {
  const [produtoSelecionado, setProdutoSelecionado] = useState("ebook");
  const [formData, setFormData] = useState({
    nomeProduto: "",
    descricao: "",
    categoria: "",
    idioma: "",
    moeda: "",
    paginaVendas: "",
    informacoesComplementares: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false); // Controla abertura/fechamento do Sheet

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto criado com sucesso!", formData);
  };

  const handleCancel = () => {
    if (
      formData.nomeProduto ||
      formData.descricao ||
      formData.categoria ||
      formData.idioma ||
      formData.moeda ||
      formData.paginaVendas ||
      formData.informacoesComplementares
    ) {
      setDialogOpen(true); // Se houver dados preenchidos, exibe o diálogo
    } else {
      setSheetOpen(false); // Se não houver dados preenchidos, fecha diretamente
    }
  };

  const confirmCancel = () => {
    setDialogOpen(false);
    setSheetOpen(false);
    setFormData({
      nomeProduto: "",
      descricao: "",
      categoria: "",
      idioma: "",
      moeda: "",
      paginaVendas: "",
      informacoesComplementares: "",
    });
  };

  return (
    <>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button className="bg-primary text-primary-foreground">Criar Produto</Button>
        </SheetTrigger>

        {/* Ajuste da largura e altura do SheetContent */}
        <SheetContent className="max-w-[90%] lg:max-w-[500px] h-full p-6">
          <SheetHeader>
            <h2 className="text-xl font-bold text-primary">Novo produto</h2>
            <p className="text-muted-foreground">Configure e dê um nome para o novo produto</p>
          </SheetHeader>

          {/* Seção de Seleção do Tipo de Produto */}
          <div className="my-4">
            <h3 className="font-semibold text-primary">Selecione o tipo do seu produto</h3>
            <div className="flex space-x-4 mt-2">
              <button
                className={`w-full p-4 border rounded-lg ${produtoSelecionado === "ebook" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                onClick={() => setProdutoSelecionado("ebook")}
              >
                <FileText className="w-6 h-6 mb-2 mx-auto" /> {/* Ícone de E-book */}
                E-book e arquivos
                <p className="text-xs text-muted-foreground">E-books, presets, zips, audiobooks e mais</p>
              </button>

              <button
                className={`w-full p-4 border rounded-lg ${produtoSelecionado === "servico" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                onClick={() => setProdutoSelecionado("servico")}
              >
                <Briefcase className="w-6 h-6 mb-2 mx-auto" /> {/* Ícone de Serviço */}
                Serviço
                <p className="text-xs text-muted-foreground">Links de pagamento, telemedicina e mais</p>
              </button>

              <button
                className={`w-full p-4 border rounded-lg ${produtoSelecionado === "curso" ? "bg-primary text-primary-foreground" : "bg-background"}`}
                onClick={() => setProdutoSelecionado("curso")}
              >
                <BookOpen className="w-6 h-6 mb-2 mx-auto" /> {/* Ícone de Curso */}
                Curso
                <p className="text-xs text-muted-foreground">Área de membros com recursos e mais</p>
              </button>
            </div>
          </div>

          {/* Renderiza as informações para o tipo selecionado */}
          {produtoSelecionado === "ebook" && <CriarEbook formData={formData} handleInputChange={handleInputChange} />}
          {produtoSelecionado === "servico" && <CriarServiço formData={formData} handleInputChange={handleInputChange} />}
          {produtoSelecionado === "curso" && <CriarCurso formData={formData} handleInputChange={handleInputChange} />}

          {/* Informações internas (fixas) */}
          <Card className="mt-6 bg-background">
            <CardHeader>
              <CardTitle className="text-primary">Informações internas</CardTitle>
              <CardDescription className="text-muted-foreground">
                Serão usadas pela nossa equipe para avaliar o seu produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary">Informações complementares</label>
                <Input
                  as="textarea"
                  name="informacoesComplementares"
                  value={formData.informacoesComplementares}
                  onChange={handleInputChange}
                  placeholder="Descreva detalhadamente para nossa equipe como o seu produto funciona..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary">Página de vendas (onde está sua oferta)</label>
                <Input
                  name="paginaVendas"
                  value={formData.paginaVendas}
                  onChange={handleInputChange}
                  placeholder="https://example.com.br"
                  type="url"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="ciente" />
                <label htmlFor="ciente" className="text-sm text-primary">
                  Estou ciente que o meu produto será avaliado de acordo com as Regras da Plataforma.
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Footer com Botões */}
          <SheetFooter className="flex justify-between mt-4">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <Button
  variant="outline"
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  onClick={handleCancel}
>
  Cancelar
</Button>

              <DialogTrigger asChild>
                <Button variant="outline" className="hidden" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Descartar alterações?</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Voltar
                  </Button>
                  <Button variant="destructive" onClick={confirmCancel}>
                    Descartar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button onClick={handleSubmit} className="bg-primary text-primary-foreground">
              Criar Produto
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
