import React from "react";
import { Zoom } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Testimonial() {
  const t = useTranslations("Homepage");
  const locale = localStorage.getItem("locale");
  return (
    <>
      <Zoom>
        <section className="bg-black mt" id="temoignage">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-white">
                 {t("testimonial_example")}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div
                  style={{
                    borderRadius: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "white",
                    boxShadow: "0 0 0 4px #000",
                  }}
                >
                  <Image
                    src={"/assets/svg/steering-wheel.svg"}
                    alt="temoignage"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-white">Samir R.</div>
                </div>
              </figcaption>
            </figure>
            <Link
              href={`/${locale}/temoignages`}

              style={{
                padding: "1rem",
                borderRadius: "3rem",
                marginTop: "2rem",
                display: "inline-block",
                backgroundColor: "white",
                color: "black",
              }}
            >
              {t("see_all_testimonials")}
            </Link>
          </div>
        </section>
      </Zoom>
    </>
  );
}

export default Testimonial;
