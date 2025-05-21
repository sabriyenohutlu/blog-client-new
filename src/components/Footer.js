'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  kategoriler: [
    { name: "Şiirler", href: "/siir/arsiv" },
    { name: "Hikayeler", href: "/hikaye/arsiv" },
    { name: "Roman İncelemeleri", href: "/roman/incelemeler/arsiv" },
    { name: "Biyografiler", href: "/biyografi/arsiv" }
  ],
  kaynaklar: [
    { name: "Blog", href: "/blog" },
    { name: "Sözlük", href: "/sozluk" },
    { name: "Yazarlar", href: "/yazarlar" },
    { name: "Edebi Akımlar", href: "/akimlar" }
  ],
  kurumsal: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
    { name: "SSS", href: "/sss" },
    { name: "Gizlilik Politikası", href: "/gizlilik" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" }
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Edebi Akış</h2>
              <p className="mt-2 text-muted-foreground">
                Türk edebiyatının dijital platformu
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Haftalık bültenimize üye olun, yeni içeriklerden haberdar olun.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="max-w-[240px]"
                />
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Üye Ol
                </Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-3">
              {footerLinks.kategoriler.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kaynaklar</h3>
            <ul className="space-y-3">
              {footerLinks.kaynaklar.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kurumsal</h3>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Edebi Akış. Tüm hakları saklıdır.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
} 