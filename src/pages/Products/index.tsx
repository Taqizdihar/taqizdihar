import { productPromo } from "./ProductsData";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function Products() {
  useDocumentTitle("Products");
  return (
    <div className="w-full space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-maroon-900 dark:text-white transition-colors duration-300">
          Products
        </h1>
        <div className="w-20 h-1.5 bg-maroon-500 rounded-full"></div>
      </section>

      {productPromo && (
        <section>
          <div className="relative w-full bg-white/90 dark:bg-[#A81717] backdrop-blur-md rounded-2xl md:rounded-3xl border border-maroon-900/10 dark:border-white/10 shadow-xl overflow-hidden group flex flex-col md:flex-row min-h-[200px]">
            {/* Left side: Image with gradient mask */}
            <div className="relative w-full md:w-72 h-56 md:h-auto overflow-hidden flex-shrink-0">
              <img
                src={productPromo.imageUrl}
                alt="Shopee Promo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient mask for seamless blend on desktop */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#ffffff] dark:from-[#7f1d1d] to-transparent"></div>
              {/* Gradient mask for mobile */}
              <div className="md:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-red-900/90 to-transparent"></div>
            </div>

            {/* Right side: Content */}
            <div className="relative w-full flex-1 p-5 md:p-6 flex flex-col justify-center dark:bg-transparent">
              <div className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300 w-fit px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 flex items-center gap-1.5 border border-orange-200 dark:border-orange-500/30">
                <ShoppingBag className="w-3.5 h-3.5" />
                Featured Store
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-maroon-900 dark:text-white transition-colors mb-3 leading-tight">
                {productPromo.title}
              </h2>

              <p className="text-sm md:text-base text-maroon-800/80 dark:text-red-50 mb-5 font-light leading-relaxed">
                {productPromo.description}
              </p>

              <a
                href={productPromo.shopeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#D74226] text-white px-6 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-[#EE4D2D]/40 group/btn w-full sm:w-auto"
              >
                {productPromo.ctaText}
                <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
