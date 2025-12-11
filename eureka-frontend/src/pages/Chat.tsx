import StarBorder from "@/components/shadcn/StarBorder";
import Conversation from "@/components/ui/Conversation";

const Chat = ({ open }: { open: boolean }) => {
  return (
    <section
      className={`min-h-screen bg-bg-primary text-text-primary 
    text-lg flex flex-col   ${
      open ? "ml-[25%] w-3/4" : "ml-12 w-full"
    } transition-all duration-300`}
    >

      <section
        className="flex justify-center items-center gap-3 py-1 
      border-b-[0.5px] border-gray-600 font-logo
      bg-bg-secondary"
      >
        <img src="./logo.webp" alt="Eureka" className="max-h-8" />
        <h1 className="font-logo tracking-wider">Eureka!</h1>
      </section>


      {/* 

mobile max-h-120 mb-5
desktop max-h-100 mb-22

*/}
      <Conversation />
      {/* 
      <div className="max-h-100 px-10 py-1 text-justify mb-3 overflow-y-scroll">
        A small, fast, and scalable bearbones state management solution. Zustand
        has a comfy API based on hooks. It isn't boilerplatey or opinionated,
        but has enough convention to be explicit and flux-like. Don't disregard
        it beced renderers. It may be the one state manager in the React space
        that gets all of these right. You can try a live demo here.A small,
        fast, and scalable bearbones state management solution. Zustand has a
        comfy API based on holorem Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Odit distinctio ratione similique earum cupiditate
        rerum facilis, quos inventore repellat, corporis ipsum vitae aliquam eos
        ut. Beatae similique cum ducimus consequuntur!Lorem Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Illum eligendi unde sequi laborum
        nam voluptate omnis minima libero corporis error labore sapiente
        consequatur, rem, dolore nisi magni eum repellendus doloribus animi
        veniam vitae, saepe molestiae? Officiis doloribus libero ut
        necessitatibus amet, optio illo ipsa dicta, possimus nobis consequatur!
        Odio nobis eum voluptatem adipisci repellat. Eum doloremque quos
        laudantium. Temporibus quas, provident optio eum repellendus molestias.
        Ullam obcaecati consequuntur aliquam iusto laborum officiis dolore minus
        tempore aperiam quaerat quibusdam asperiores, voluptatibus molestiae
        aliquid nisi culpa neque ipsam ab cupiditate error quidem ad voluptatem
        sunt iure! Maxime eos debitis sapiente! Sunt cupiditate quos iure illo
        explicabo blanditiis, consequuntur velit perferendis earum non eius
        error laborum nulla ipsum at accusamus porro, temporibus placeat est
        aliquam amet eligendi nemo labore? Dolorem provident voluptatum sed,
        modi aliquid minus autem ex quia eaque ut temporibus? Velit, eos
        corrupti! Assumenda, atque totam! Sint, alias libero possimus at maiores
        molestiae exercitationem asperiores? Consectetur assumenda modi optio
        minima iusto tempore illo alias quibusdam atque aliquam inventore, animi
        dolorem ducimus voluptatem, non, deleniti distinctio repellendus
        provident esse nobis ratione similique ipsa. Impedit quas repellendus
        sunt esse modi non quia, eligendi placeat sit quod, cumque fuga, dolores
        quidem rem accusamus nulla veritatis! Saepe doloribus, eligendi
        necessitatibus impedit doloremque officiis! In sed exercitationem sequi
        eaque voluptatem facere eos qui repudiandae quisquam cumque eius
        adipisci debitis consectetur amet eligendi harum ea, dolore error
        sapiente? Praesentium cum minima ipsam rem error harum eius, placeat
        nisi ipsa quia obcaecati possimus amet eveniet, laborum quisquam
        deleniti fugiat dignissimos, aperiam veritatis sed saepe. Natus numquam
        perferendis voluptatum nostrum in eos iste, ducimus inventore
        praesentium asperiores dignissimos voluptate quia fuga minima aliquam!
        Inventore expedita corporis architecto? Impedit repudiandae fuga
        adipisci a vero ratione perferendis odio quidem labore temporibus
        mollitia praesentium doloribus doloremque officiis at, aperiam molestias
        suscipit dolores sequi repellendus ipsam quis. Aut, magnam qui deleniti
        impedit asperiores, minima fugit iure animi laborum sapiente optio, sint
        necessitatibus labore repudiandae voluptatibus temporibus dignissimos
        quibusdam rerum hic nemo ratione eligendi inventore dicta! In adipisci,
        inventore non cumque voluptatum aliquam commodi! Ducimus numquam
        assumenda in sequi animi deleniti aut perferendis magnam voluptatibus
        molestias at cum odit nobis, facere, quo possimus laborum iusto atque
        aliquid. Dignissimos totam excepturi accusantium quidem, asperiores
        eligendi nihil itaque cum, repudiandae nostrum officiis, inventore illum
        ab aperiam! Asperiores temporibus enim recusandae illo voluptates
        officia, dignissimos ipsa rem consequatur maxime tenetur suscipit
        facilis? Ipsa aliquid, reprehenderit soluta labore minus qui iusto nobis
        adipisci, a iste, placeat excepturi! Sit aut numquam minima temporibus
        sequi eaque. Porro, in hic! Ducimus a recusandae, ad architecto, quaerat
        explicabo rerum, accusantium tempore unde nisi ipsa mollitia. Ex saepe
        nobis magni id suscipit a numquam veritatis, aliquid iusto libero rerum
        debitis exercitationem sapiente rem, fugiat animi, nihil ad repellendus?
        Odit cumque ut tempora delectus modi provident similique, praesentium
        enim deserunt. Placeat, sit temporibus. Sed ea nam adipisci voluptates.
        Rem nulla ipsa, corrupti error incidunt earum eos quis cupiditate
        deleniti libero accusamus quos modi similique ratione dolor veritatis!
        Sed vitae atque id sint similique? Nostrum dolores corrupti excepturi
        deserunt nam, eius vel necessitatibus expedita consequatur alias
        assumenda iusto, cupiditate ipsa voluptates itaque cum nesciunt veniam,
        provident reiciendis similique voluptatibus recusandae. Cum dolores
        inventore recusandae laudantium repellendus. Vero tempora cumque
        possimus. Eaque ratione quod, a distinctio voluptas eum? Libero pariatur
        minus maiores quas quia modi ea nobis ab cum omnis velit expedita
        blanditiis tempore eum magni dolor, eveniet aut esse rerum cumque harum
        odit error in. Quam praesentium facere illum dolore nostrum repellendus
        maiores, officia autem, ad tempore illo quas sunt numquam eaque animi
        consequuntur magni natus voluptatibus voluptas alias, libero eius
        placeat. In tempora, est, animi nemo quis soluta perspiciatis nisi
        dolorem, deserunt eveniet excepturi error deleniti repellendus eius
        expedita? Cupiditate saepe accusamus ducimus. Placeat exercitationem
        impedit similique minima, enim veniam, facere deserunt asperiores
        eveniet quis, debitis hic officiis voluptatibus quidem quae illum ad
        delectus et aut dolorum! Odio sed id tempora nam corporis quam ipsa?
        Sunt saepe iste explicabo, fuga aut asperiores atque ullam harum
        voluptatum molestias eaque quasi sed doloribus error. Impedit laborum
        nemo voluptatibus quis labore eveniet. Voluptatem enim dignissimos
        voluptates possimus nobis libero commodi suscipit. Aliquid ea animi
        quod, non velit qui autem sunt delectus sed officia minus architecto
        veritatis debitis expedita neque doloremque omnis ducimus veniam, at
        inventore nesciunt nemo? Enim quo laudantium nam mollitia voluptatem
        repellendus, deleniti sapiente, est qui amet maiores laborum nihil
        ratione in. Quia architecto culpa repellendus iusto officia eius odit
        dolorum aliquid saepe vitae eos repellat debitis, officiis fugiat
        delectus aliquam ullam pariatur deleniti voluptates rem rerum minus enim
        adipisci error! Recusandae sapiente rem voluptatum in dolor asperiores
        officiis, dignissimos provident praesentium distinctio modi eligendi
        perferendis qui minus suscipit laborum expedita obcaecati nihil impedit
        quae reiciendis eveniet sequi. Qui vitae quibusdam rerum distinctio
        reiciendis. Ipsum voluptatum, quia nostrum saepe similique illo dolore
        commodi repellendus eum architecto enim accusamus facere itaque nesciunt
        aut dolor pariatur nam deserunt, tempora voluptate possimus delectus.
        Iusto, cum natus eaque suscipit animi excepturi numquam vero adipisci
        veritatis commodi saepe magni in eveniet non dolorum rerum, unde debitis
        est asperiores esse! Laboriosam pariatur autem est? Corporis maiores
        voluptate hic earum praesentium? Adipisci sequi eveniet incidunt ipsam
        eius nobis at vel doloribus repellat pariatur! Eos adipisci quidem
        corporis, aliquam possimus beatae unde impedit mollitia ipsam est omnis
        nulla porro ducimus cumque consequatur enim fuga, iste nam. Modi sit, a
        ducimus perspiciatis neque eos corporis officia corrupti fuga quos,
        eveniet quam facere eligendi temporibus, necessitatibus quas sint dolor.
        Neque est, pariatur iste eum ad similique odio sint asperiores,
        architecto impedit culpa sunt reprehenderit molestiae harum laudantium
        labore ut illum aspernatur maiores quidem ratione hic odit. Quis
        dolores, distinctio neque ipsam, magnam impedit exercitationem dolorem
        optio explicabo repudiandae pariatur assumenda atque, praesentium quod
        vitae ut ad dignissimos vero voluptatibus! Praesentium perferendis
        excepturi nam ad. Omnis alias sunt quis ad delectus eveniet vero quasi
        reiciendis aperiam iure quia illum culpa nihil perspiciatis a, velit
        excepturi voluptatibus. Nisi, blanditiis asperiores. Molestias,
        reprehenderit deleniti excepturi quibusdam, nostrum quia, tenetur
        reiciendis modi dicta quos beatae ea et repellendus totam?oks. It isn't
        boilerplatey or opinionated, but has enough convention to be explicit
        and flux-like. Don't disregard it because it's cute, it has claws! Lots
        of time was spent to deal with common pitfalls, like the dreaded zombie
        child problem, React concurrency, and context loss between mixed
        renderers. It may be the one state manager in the React space that gets
        all of these right. You can try a live demo here.t has claws! Lots of
        time was spent to deal with common pitfalls, like the dreaded zombie
        child problem, React concurrency, and context loss between mixed
        renderers. It may be the one state manager in the React space that gets
        all of these right. You can try a live demo here.A small, fast, and
        scalable bearbones state management solution. Zustand has a comfy API
        based on hooks. It isn't boilerplatey or opinionated, but has enough
        convention to be explicit and flux-like. Don't disregard it because it's
        cute, it has claws! Lots of time was spent to deal with common pitfalls,
        like the dreaded zombie child problem, React concurrency, and context
        loss between mixed renderers. It may be the one state manager in the
        React space that gets all of these right. You can try a live demo here.
      </div> */}

      <section className="w-9/10 mx-auto mt-auto max-w-3xl mb-20 ">
        <StarBorder color="white" speed="5s" thickness={2} className="w-full">
          <textarea
            name="chat"
            id="chatbox"
            placeholder="Say Eureka!"
            className="w-full resize-none outline-none text-white placeholder-gray-400 p-3 rounded-md bg-transparent min-h-[70px]"
          ></textarea>
        </StarBorder>
      </section>
    </section>
  );
};

export default Chat;
