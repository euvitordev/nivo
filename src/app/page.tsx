import Image from "next/image";
import NivoIcon from "../../public/nivo-icon 1.svg";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex max-w-96 flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image src={NivoIcon} alt="Icone do Nivo" width={32} />
          <h1 className="text-2xl font-bold">Nivo</h1>
          <Badge
            variant="secondary"
            className="rounded-full bg-teal-400/10 font-bold text-teal-300"
          >
            Beta
          </Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Seu App de Despesas e Metas</h2>
          <p className="text-justify opacity-80">
            Cansado de planilhas confusas e apps complicados? Conheça o Nivo, o
            app de despesas e metas financeiras que te ajuda a tomar o controle
            do seu dinheiro de forma simples e intuitiva!
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <Input
            type="email"
            placeholder="Digite seu nome"
            className="rounded-lg border-2 bg-foreground/5"
          />
          <Link href={"/dashboard"}>
            <Button size={"sm"} className="w-fit rounded-lg">
              <Check className="mr-2 h-4 w-4" /> Realizar acesso BETA
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
