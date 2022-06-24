import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const {slug} = useParams<{slug: string}>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug}></Video> : <div className="flex-1">Clique em alguma aula a direita para assistir!</div>}
                <Sidebar></Sidebar>        
            </main>
        </div>
    )
}