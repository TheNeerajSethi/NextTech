
import Latestnewsblock from "@/app/componant/latestnewsblock";
import Blogcard from "@/app/componant/blogcard";
import Latestblog from "@/app/componant/latestblog";
import Cta from "@/app/componant/cta";
import Category from "@/app/componant/category";

export default function Home() {
  return (
      <div>

    <div className="justify-center flex">
      <Latestnewsblock/>

    </div>
        <div className="mt-5">
      <Blogcard/>
        </div>
        <div className="mt-5">
          <Latestblog/>
        </div>
        <div className="mt-5">
          <Cta/>
          <Category/>
        </div>
      </div>
  );
}
