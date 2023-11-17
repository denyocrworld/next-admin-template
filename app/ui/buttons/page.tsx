
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCoffee, faSave } from "@fortawesome/free-solid-svg-icons";
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
      <Breadcrumb pageName="Buttons" />

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Colors
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_primary */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_secondary */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_success */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_danger */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_warning */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_info */}
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Info
            </Link>
            {/* ~ */}


          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_primary_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_secondary_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_success_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_danger_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_warning_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_info_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Info
            </Link>
            {/* ~ */}


          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_primary_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_secondary_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_success_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_danger_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_warning_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_info_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Info
            </Link>
            {/* ~ */}


          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_primary_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_secondary_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-secondary py-4 px-10 text-center font-medium text-secondary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_success_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-success py-4 px-10 text-center font-medium text-success hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_danger_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-danger py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_warning_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-warning py-4 px-10 text-center font-medium text-warning hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_info_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-info py-4 px-10 text-center font-medium text-info hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Info
            </Link>
            {/* ~ */}
          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_icon_primary */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_secondary */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_success */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_danger */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_warning */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_info */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2.5 bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Info
            </Link>
            {/* ~ */}

          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_icon_primary_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_secondary_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_success_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_danger_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_warning_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_info_rounded */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Info
            </Link>
            {/* ~ */}

          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_icon_primary_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_secondary_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_success_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_danger_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_warning_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-warning py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_info_stadium */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full gap-2.5 bg-info py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Info
            </Link>
            {/* ~ */}

          </div>

          <div className="mb-7.5 gap-5 xl:gap-20">

            {/* button_icon_primary_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Primary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_secondary_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-secondary py-4 px-10 text-center font-medium text-secondary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Secondary
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_success_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-success py-4 px-10 text-center font-medium text-success hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Success
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_danger_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-danger py-4 px-10 text-center font-medium text-danger hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Danger
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_warning_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-warning py-4 px-10 text-center font-medium text-warning hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Warning
            </Link>
            {/* ~ */}

            <span className="mr-6"></span>

            {/* button_icon_info_outline */}
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md gap-2.5 border border-info py-4 px-10 text-center font-medium text-info hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <FontAwesomeIcon icon={faSave} />
              Info
            </Link>
            {/* ~ */}
          </div>

        </div>
      </div>

    </>
  );
};

export default Buttons;
