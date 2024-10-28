import { SplitedContainer} from "@/components/splited-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Discussion } from "@/components/discussion"; 

export default function HomePage(){
    return (
        <div className="flex flex-col w-full">
            <div className="border-muted border-x-[1px] border-b-[1px]">
                <SplitedContainer>
                    <div>
                        <Input type="text"
                        placeholder="Qué esta pasando?"
                        className="rounded-none text-xl font-light border-0 border-b-2 border-muted w-full focus-visible:ring-0 focus-visible:border-0"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-32 rounded-full">Publicar</Button>
                    </div>
                </SplitedContainer>
            </div>

            <div className="border-muted border-x-[1px]">
                <Discussion/>
            </div>
        </div>
    );
}