
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


const items: any[] = [
  {
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    name: "Youtube",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
];

const Buttons = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Heading
            <span className="float-right"><FontAwesomeIcon icon={faAdd} /></span>
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          {/* table */}
          {/*
          Implement This:
          const items: any[] = [
            {
              name: "Google",
              visitors: 3.5,
              revenues: "5,768",
              sales: 590,
              conversion: 4.8,
            },
            {
              name: "Twitter",
              visitors: 2.2,
              revenues: "4,635",
              sales: 467,
              conversion: 4.3,
            },
            {
              name: "Youtube",
              visitors: 2.1,
              revenues: "4,290",
              sales: 420,
              conversion: 3.7,
            },
          ];
          */}
          <h4 className="text-xl mb-4 text-black dark:text-white">Top Channels</h4>

          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Source
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Visitors
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Revenues
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Sales
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Conversion
                </h5>
              </div>
            </div>

            {items.map((brand, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${key === items.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
                  }`}
                key={key}
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <p className="hidden text-black dark:text-white sm:block">
                    {brand.name}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{brand.visitors}K</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-meta-3">${brand.revenues}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">{brand.sales}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-meta-5">{brand.conversion}%</p>
                </div>
              </div>
            ))}
          </div>
          {/* ~ */}

        </div>
      </div>

    </>
  );
};

export default Buttons;
