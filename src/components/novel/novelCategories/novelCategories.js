'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const categories = [
  {
    title: 'Roman İncelemeleri',
    description: 'Detaylı roman analizleri ve eleştirel değerlendirmeler',
    href: '/roman/incelemeler',
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Roman Önerileri',
    description: 'Okuyucularımız için seçtiğimiz özel roman tavsiyeleri',
    href: '/roman/oneriler',
    image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
    // },
  // {
  //   title: 'Roman Özetleri',
  //   description: 'Popüler romanların kapsamlı özetleri',
  //   href: '/roman/ozetler',
  //   image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  // }
];
const novelCategories = () => {
  return (
    <>
      <section className="container-custom py-8">
        <h1 className="text-4xl font-bold mb-8">Roman</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.href}
              href={category.href}
              className="group relative overflow-hidden rounded-lg hover-lift"
            >
              <div className="aspect-[16/9] relative">
                {/* Arkaplan Resmi */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {/* Karartma Katmanı */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                </div>
                
                {/* İçerik */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h2>
                    <p className="text-gray-200">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Ok İkonu */}
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium mr-2">Keşfet</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default novelCategories