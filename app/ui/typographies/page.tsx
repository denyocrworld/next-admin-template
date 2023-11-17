
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd, faAdd, faCoffee, faSave } from "@fortawesome/free-solid-svg-icons";
export const metadata: Metadata = {
  title: "Buttons Page | Next.js E-commerce Dashboard Template",
  description: "This is Buttons page for TailAdmin Next.js",
  // other metadata
};

/*
//#TEMPLATE button2
<Link
  href="#"
  className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
>
  Button
</Link>
//#END
*/

const Buttons = () => {
  return (
    <>
      <Breadcrumb pageName="Typographies" />
      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Heading
            <span className="float-right"><FontAwesomeIcon icon={faAdd} /></span>
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          {/* h1 */}
          <h1 className="text-4xl">Heading 1</h1>
          {/* ~ */}

          {/* h2 */}
          <h2 className="text-3xl">Heading 2</h2>
          {/* ~ */}

          {/* h3 */}
          <h3 className="text-2xl">Heading 3</h3>
          {/* ~ */}

          {/* h4 */}
          <h4 className="text-xl">Heading 4</h4>
          {/* ~ */}

          {/* h5 */}
          <h5 className="text-lg">Heading 5</h5>
          {/* ~ */}

          {/* h6 */}
          <h6 className="text-base">Heading 6</h6>
          {/* ~ */}

          {/* plorem */}
          <p>Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et.</p>
          {/* ~ */}

        </div>
      </div>

    </>
  );
};

export default Buttons;
