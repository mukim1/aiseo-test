import { Fragment, useRef } from 'react'
import EditorComponent from './components/Editorjs/EditorComponent'
import EditorJS from "@editorjs/editorjs";
import { DEFAULT_INITIAL_DATA } from './components/Editorjs/constant.d';

const App = () => {
  const ejInstance = useRef<EditorJS | null>(null);

  const addData = (data: any) => {
    ejInstance.current?.save().then((outputData: any) => {
      ejInstance.current?.render({
        blocks: [...outputData.blocks, data]
      });
    });
  }

  const addText = (length: number) => {
    return addData({
      type: "paragraph",
      data: { text: generateText(length) }
    })
  }

  const addHeader = (level: number) => {
    return addData({
      type: "header",
      data: { text: generateText(5), level: level }
    })
  }

  return (
    <Fragment>
      <div className='h-16 shadow-md mb-5' />
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <EditorComponent ref={ejInstance} />
        </div>
        <div className=''>
          <div className='grid'>
            <Btn onClick={() => ejInstance.current?.clear()}>Clear</Btn>
            <Btn onClick={() => ejInstance.current?.render({ blocks: DEFAULT_INITIAL_DATA.blocks })}>Reset</Btn>

            <Btn onClick={() => addHeader(1)}>Add Header 1</Btn>
            <Btn onClick={() => addHeader(2)}>Add Header 2</Btn>
            <Btn onClick={() => addHeader(3)}>Add Header 3</Btn>
            <Btn onClick={() => addHeader(4)}>Add Header 4</Btn>

            <Btn onClick={() => addText(10)}>Generate 10 word</Btn>
            <Btn onClick={() => addText(50)}>Generate 50 word</Btn>
            <Btn onClick={() => addText(100)}>Generate 100 word</Btn>
            <Btn onClick={() => addText(200)}>Generate 200 word</Btn>
            <Btn onClick={() => addText(500)}>Generate 500 word</Btn>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App

const Btn = (props: any) => {
  return <button
    {...props}
    className='bg-blue-50 hover:bg-blue-100 font-thin tracking-wider text-gray-700 uppercase py-2 px-4 rounded border-none my-1'
  >{props.children}</button>
}

const generateText = (length: number) => {
  return lorem.split(" ").slice(0, length).join(" ");
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis accusantium voluptatibus, deleniti soluta earum laborum cum quaerat architecto rerum tenetur odit consequuntur. Necessitatibus alias dolor excepturi fugiat. Sed voluptates numquam ex officia id cum minima laudantium voluptas optio. Velit, itaque deleniti. Optio a blanditiis, veniam rerum et iste soluta nisi? Asperiores accusantium iusto quam nostrum voluptas illo quia doloribus excepturi cumque nam officiis, quod aspernatur numquam rerum quasi. Aliquid, doloribus nobis. Repellat temporibus atque et praesentium rerum consequuntur natus voluptates! Recusandae rerum laudantium impedit, consectetur neque cumque voluptatum voluptatem. Enim non qui cum quisquam architecto ducimus ipsa cupiditate nesciunt, itaque maiores illo nihil beatae harum blanditiis impedit incidunt totam recusandae expedita asperiores accusantium voluptatibus. Harum numquam molestias doloribus nulla a adipisci quos hic distinctio, non temporibus suscipit explicabo corporis tempora aliquid illo? Nostrum labore nulla dolore, doloribus delectus dolorum eius quia voluptatum quibusdam? Maiores, eaque quidem suscipit quia hic assumenda dolor laborum quibusdam fugiat ipsam atque vitae non consequuntur totam eum cum voluptatum a, libero maxime! Repudiandae officiis aut dolores laboriosam quis, exercitationem aliquid cupiditate corrupti repellendus facilis minima hic sunt minus. At dicta minus repellendus veniam nihil distinctio quos modi quae, aliquid illum, optio in suscipit sint natus! Tempore quasi dignissimos sequi officiis ut nam, velit iure esse consectetur similique exercitationem odit animi eius. Exercitationem nesciunt quae dolorum quasi, earum debitis incidunt iusto a. Dolore, perspiciatis pariatur? Quod magni repellat, sunt tenetur officiis autem rem quisquam voluptatibus iusto asperiores pariatur! Molestias voluptate esse natus deleniti. Eveniet consectetur ut id facilis repellendus enim repellat nemo et. Provident aspernatur illo obcaecati eaque, impedit modi eum sint incidunt. Ipsa consequuntur tempora est quidem saepe non neque earum accusamus debitis inventore aperiam, dicta sequi provident voluptas. Voluptatem nihil aut atque provident quisquam nobis! Sed, facilis! Impedit quod harum aliquid sed provident ipsa corporis minus earum cumque nostrum voluptate sint ad cupiditate libero doloremque, assumenda consequatur porro temporibus nihil iusto asperiores, obcaecati vero! Cupiditate quisquam facere, itaque eos, quam iusto veniam totam necessitatibus ea repudiandae odit numquam magnam eaque mollitia voluptate soluta sint rerum ipsa est at ratione nisi? Et odit vel fuga! Doloribus, veritatis praesentium! Tenetur culpa possimus eligendi earum libero voluptatem laborum nemo. Est, vero aliquam magni consequatur soluta voluptatem unde nihil et. Quis deleniti omnis quibusdam dignissimos! Deleniti, assumenda. Velit deserunt libero possimus dolore sit, in molestiae, odit illo incidunt autem, exercitationem obcaecati recusandae magni modi assumenda culpa nobis? Nisi obcaecati consequatur natus in sapiente aperiam numquam ullam et exercitationem commodi facere sequi, placeat labore ut accusantium nesciunt iure quia nostrum dicta aliquid ipsa maxime quibusdam magnam ducimus. Dolorem obcaecati fugiat eligendi incidunt tempora nemo eos? Sunt dolores odit fugiat quam ipsa, porro doloremque enim nostrum veniam nisi reprehenderit alias dicta veritatis, officia perspiciatis voluptatibus quibusdam, vel amet aut dolore at quae molestiae voluptatem deserunt. Sint natus ab excepturi fuga modi consequuntur suscipit ipsa accusantium, nihil aliquam error ratione veniam saepe non nisi dolore expedita? Fugiat esse harum laborum, consequuntur eligendi beatae recusandae fuga animi! Rem vero quas voluptas saepe libero sapiente dignissimos explicabo dolor, esse quos eos veritatis commodi officiis culpa consequatur optio itaque, quasi praesentium beatae pariatur. Atque, nisi ut adipisci placeat itaque fugit error voluptatibus fugiat rem facere eos reiciendis mollitia aspernatur sapiente deleniti explicabo ducimus fuga voluptatum molestias iure. Doloribus dolor voluptatibus quibusdam quaerat fuga iure esse vel delectus commodi modi. Neque esse tenetur autem quasi, consequuntur voluptatibus veritatis quidem quaerat quibusdam! Facere officia vel quibusdam quos excepturi rerum aliquid voluptates, modi fugiat, fuga praesentium eaque magnam adipisci sequi tempore perspiciatis possimus dolores consequuntur odio harum accusamus. Facilis nam, molestiae mollitia non veniam inventore error deleniti dicta fuga accusamus sapiente, commodi libero, totam eligendi iste. Distinctio vero voluptatum, tempore asperiores fugiat soluta consequuntur nemo modi deserunt debitis! Sed hic quaerat tempore consequuntur eos nobis voluptatibus quae ipsum assumenda recusandae asperiores inventore laborum eligendi molestiae, suscipit minus, quis quisquam. Cumque reprehenderit magnam natus modi eveniet asperiores sed dolores aperiam vel ratione temporibus aliquam eaque ipsa animi recusandae, at possimus atque vitae facere placeat adipisci et perferendis. Quisquam mollitia neque harum et facere, iusto deserunt doloribus ducimus repellendus ipsa, deleniti soluta nihil sed. Neque officia velit quia ex error illo aperiam perspiciatis pariatur? Repellat a mollitia, iste quibusdam ut suscipit sequi repellendus expedita reprehenderit libero placeat error quod esse magni fuga, ab repudiandae maxime non numquam quos? Numquam quis doloremque, itaque minus, ex perspiciatis sunt beatae ducimus tempore aperiam voluptate magni excepturi ea, cum iure quod placeat est iste sit quidem non hic rem eum recusandae. Atque fugiat porro laudantium rerum quibusdam eum eligendi ratione. Tenetur dolore dicta minima sed ullam suscipit nostrum velit delectus perspiciatis nesciunt hic quia quisquam id repellendus atque magni maiores harum, alias laboriosam eos quaerat consequatur sequi dolores minus. Et ad nesciunt minus tempore doloribus possimus quidem. Optio id provident recusandae odit eveniet minus nemo sapiente eaque delectus voluptatibus harum illum sint debitis possimus, quis ipsum iusto! Quam corporis consequuntur, eligendi aspernatur impedit vero, minima, cumque fuga deleniti earum provident tempore tempora harum id eum sint amet aliquam sequi quos fugiat voluptate nisi. Consectetur sit totam qui asperiores! Pariatur, voluptatibus? Exercitationem dolorem veritatis delectus necessitatibus consequatur? Aut ab assumenda porro officia, necessitatibus odit amet optio iusto quae pariatur ipsam fuga inventore numquam architecto ut nobis recusandae neque hic provident. Ipsam nemo inventore deserunt veritatis impedit officia vero dignissimos dicta debitis obcaecati, magnam quos odio dolores ab repellendus assumenda, suscipit ratione, id placeat repudiandae accusamus. Illo debitis inventore sequi quo eligendi, quas, explicabo neque labore autem cumque perspiciatis molestias, perferendis sapiente consequatur exercitationem quibusdam et sed commodi modi? Repellendus ex voluptate necessitatibus consectetur adipisci suscipit? Cupiditate, assumenda ut! Quod tenetur architecto quos, deserunt odit dicta nesciunt recusandae nostrum enim ab provident fugit reiciendis minus quaerat voluptas, iure voluptatem! Quidem odit soluta libero incidunt illo reprehenderit, quis, repellendus animi fugit tempora eos officia atque, neque fugiat iusto. Autem similique quibusdam corrupti sint nulla sit! Ipsa voluptates, consequuntur consectetur tenetur reprehenderit delectus a veritatis nisi excepturi sit aspernatur cum labore eos iste culpa possimus corporis fugit fuga.`