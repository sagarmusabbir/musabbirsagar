import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="space-y-8 mx-auto">
      <div>
        <h1 className={title()}>About</h1>
      </div>
    </section>
  );
}

// export async function getStaticProps(context) {
//   const posts = await getPosts()

//   if (!posts) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { posts }
//   }
// }
