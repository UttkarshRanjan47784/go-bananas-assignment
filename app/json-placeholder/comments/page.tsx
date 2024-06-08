import TopBar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Comment } from "@/types";
import axios from "axios";

export default async function JsonCommentsPage() {
  const commentList = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`
  );

  const renderComments = commentList.data.map(
    (item: Comment, index: number) => {
      return (
        <div
          key={`${index}${Math.random()}`}
          className="p-5 border border-muted-foreground mb-5 rounded-xl"
        >
          {item.body}
        </div>
      );
    }
  );

  return (
    <main className="flex flex-col h-dvh w-full relative">
      <TopBar />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 h-full relative">
        <div className="hidden sm:block md:col-span-2 p-5">
          <h3 className="font-mono p-5 text-3xl">Article</h3>
          <hr className="bg-muted-foreground h-0.5 mb-5" />
          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              interdum vestibulum elit, nec porttitor lectus semper et. Mauris
              eget tortor nec ex mattis mattis. Aliquam at eros vel purus
              faucibus hendrerit. Nullam a sem vehicula, semper nibh vitae,
              scelerisque metus. Vivamus convallis suscipit mi, eget rutrum odio
              consectetur vel. Morbi efficitur lacinia pretium. Suspendisse ac
              ante sit amet eros euismod rhoncus quis eget mauris. Quisque eu
              odio et velit dignissim tincidunt. Cras pharetra, risus ac
              sagittis accumsan, magna neque pellentesque justo, ut feugiat odio
              erat in enim. Mauris ornare libero sit amet lacus tristique, ac
              accumsan nulla sodales. Morbi euismod ac ante sed tristique.
              Vivamus congue convallis elit ut vehicula. Aliquam at elit dui.
              Quisque pharetra justo lorem, ac bibendum mi commodo sed.
              Vestibulum eu tempor justo, eget finibus ante. Mauris auctor lorem
              id auctor malesuada. Nulla mi enim, dictum sed convallis at,
              lacinia et mi. In consectetur eu tellus id tincidunt. Sed
              pellentesque orci sit amet consectetur gravida. Mauris eget ligula
              sollicitudin, facilisis nulla vel, porta ligula. Donec ullamcorper
              ac sem at placerat. Morbi in lectus viverra augue imperdiet
              laoreet in nec mi. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Donec non tempor lacus. Morbi suscipit luctus
              mattis. Donec sit amet arcu vel elit semper laoreet non eget orci.
              Integer et dapibus urna. Aliquam hendrerit lorem ut rhoncus
              finibus. Proin elementum porta nulla, consequat blandit nisi
              suscipit quis. Nunc fringilla, erat in tempus aliquam, erat metus
              facilisis elit, sodales sagittis ante diam et erat. Sed ac
              elementum sem. Nulla vehicula nunc eu erat mollis tempus. Nam
              ultrices, quam a posuere facilisis, elit libero ultricies libero,
              id fermentum justo nisi eget nibh. Mauris sed mauris id purus
              aliquam commodo nec quis dui. Aliquam bibendum faucibus metus,
              eget fermentum velit efficitur nec. Fusce a nibh tellus. Fusce
              viverra mi leo, quis varius arcu placerat tempus. In quis purus
              lectus. Aliquam erat volutpat. Nulla vel mauris pretium, bibendum
              nunc ut, mollis ligula. Ut at lorem varius, finibus mauris at,
              finibus orci. Nam vel pellentesque metus. Morbi a magna
              sollicitudin, semper justo vitae, sodales lectus. Nulla in massa
              vulputate, viverra risus sed, ornare nisi. Integer fringilla mi
              non nulla euismod, eu maximus elit sagittis. Pellentesque rutrum
              metus et eros mattis efficitur. Sed tristique lacus vel purus
              malesuada pellentesque. Nulla id efficitur neque. Etiam accumsan
              nulla ac aliquam lobortis. Pellentesque non risus mi. Etiam arcu
              lorem, aliquet quis tellus eget, interdum tincidunt metus.
            </p>
          </section>
        </div>
        <div className="sm:hidden p-5 flex justify-center items-center border-b border-muted-foreground">
          <Button>View Article</Button>
        </div>
        <ScrollArea className="sm:border-l sm:border-muted-foreground p-5 h-full">
          <h3 className="font-mono p-5 text-3xl">Comments</h3>
          <hr className="bg-muted-foreground h-0.5 mb-5" />
          {renderComments}
        </ScrollArea>
      </div>
    </main>
  );
}
