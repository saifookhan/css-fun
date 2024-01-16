import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/">Back to home</Link>

      <div className="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde
        consectetur iure illo ducimus ab, ut ea quasi nulla placeat provident
        laboriosam deserunt explicabo recusandae totam minima veritatis omnis!
        Eos repellendus doloribus repellat quae sint non ea. Repellat placeat
        quisquam consequatur eos ratione provident asperiores veritatis. Impedit
        neque, suscipit pariatur placeat error consequatur voluptate sunt
        aperiam asperiores, excepturi ratione inventore id! Ad culpa eum aliquam
        exercitationem libero possimus, voluptatem soluta architecto. Eos, sint
        commodi libero accusamus voluptatibus tempore aspernatur id sapiente,
        officiis iusto error saepe nisi incidunt adipisci consequuntur, dolorem
        a sunt neque officia assumenda. Tempora ipsa reprehenderit voluptas quod
        sapiente nostrum, illum numquam nisi distinctio est doloremque ad
        explicabo. Deleniti saepe ea distinctio mollitia quidem facere ut
        molestias itaque aliquid libero, tenetur, voluptatum, nobis labore
        dolorem modi sequi accusantium eveniet ipsa velit nesciunt reprehenderit
        sint? Eius dicta quidem excepturi, reiciendis dolorum ab sit distinctio
        suscipit unde, similique natus impedit totam nostrum facilis hic tempore
        maiores quasi commodi voluptatibus dolore, nobis voluptatem fuga. Eos
        facere eius perferendis suscipit praesentium tempora maiores, vitae est,
        nemo necessitatibus non enim sapiente beatae ut, accusantium sint
        obcaecati repellat voluptatibus dolorem aspernatur doloribus corporis
        perspiciatis esse! Repellendus mollitia nesciunt in veritatis numquam!
        Id, labore aspernatur!
      </div>
      <p>
        this has{" "}
        <span className="font-mono text-gray-400">
          min-width, width and max-width
        </span>
      </p>
      <br />
      <br />
      <div className="box-clamp"></div>

      <p>
        this has{" "}
        <span className="font-mono text-gray-400">
          width: clamp(300px, 75%, 500px);
        </span>
      </p>
    </>
  );
}
