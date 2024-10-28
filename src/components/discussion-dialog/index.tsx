import { DiscussionForm } from "../discussion-form"; 
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

export function DiscussionDialog(){
    return(
        <Dialog>
            <DialogTrigger className="p-2 bg-primary rounded-full w-full">Publicar</DialogTrigger>    
            <DialogContent className="border-muted max-w-2xl">
                <DiscussionForm/>
            </DialogContent>
        </Dialog>
    );
}