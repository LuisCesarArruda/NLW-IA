import React from "react";
import { Github } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "@radix-ui/react-separator";
export function App() {

	return (
		<div>
			<div className="px-6 py-3 flex items-center justify-between border-b-0">

				<h1 className="text-xl font-bold"> Upload.ai</h1>

				<div className="flex items-center gap-3">

					<span className="text-sm text-muted-foreground">
					Desenvolvido com ❤️ no NLW da Rocketseat
					</span>
					
					<Separator orientation="vertical" className=" h-6"/>

					<Button>
						<Github className ="w-4 h-4 mr-2"/>
            GitHub
					</Button>
				</div>
			</div>
		</div>
	);
}


