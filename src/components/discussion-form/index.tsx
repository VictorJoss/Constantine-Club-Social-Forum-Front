import { SplitedContainer } from "../splited-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DiscussionForm(){
    return(
        <SplitedContainer>
            <div>
                <Input type="text" placeholder="Qué esta pasando?" className="rounded-none text-xl font-light border-0 border-b-2 border-muted w-full focus-visible:ring-0 focus-visible:border-0"></Input>
            </div>
            <div className="flex justify-end">
                <Button className="w-32 rounded-full">Publicar</Button>
            </div>
        </SplitedContainer>
    )
}