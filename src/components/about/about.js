"use client";

import { NextSeo } from "next-seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    role: "Baş Editör",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "15 yıllık edebiyat ve yayıncılık deneyimi",
  },
  {
    name: "Zeynep Kaya",
    role: "İçerik Yöneticisi",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    bio: "Modern Türk Edebiyatı uzmanı",
  },
  {
    name: "Mehmet Demir",
    role: "Yazı İşleri Müdürü",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    bio: "Karşılaştırmalı edebiyat doktorası",
  },
];

const stats = [
  { label: "Aktif Okuyucu", value: "10K+" },
  { label: "Yayınlanan İçerik", value: "1000+" },
  { label: "Yazar & Şair", value: "500+" },
  { label: "Edebiyat Akımı", value: "25+" },
];

const contactInfo = {
  email: "iletisim@edebiakis.com",
  phone: "+90 (212) 555 0123",
  address: "Beyoğlu, İstanbul",
  website: "www.edebiakis.com",
};


const About = () => {
  return (
    <>
    <NextSeo
      title="Hakkımızda - Edebi Akış"
      description="Türk ve dünya edebiyatını dijital platformda buluşturan edebi içerik platformu"
      openGraph={{
        title: "Hakkımızda - Edebi Akış",
        description:
          "Türk ve dünya edebiyatını dijital platformda buluşturan edebi içerik platformu",
      }}
    />
    <div className="container-custom py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Edebiyatın Dijital Yüzü
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Edebi Akış, Türk ve dünya edebiyatını modern bir yaklaşımla ele
          alan, okuyucuları kaliteli içerikle buluşturan dijital bir edebiyat
          platformudur.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <Card>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
                <p className="text-muted-foreground mb-4">
                  Edebiyatı herkes için erişilebilir kılmak, klasik ve modern
                  eserleri günümüz okuyucusuna uygun bir formatta sunmak ve
                  edebiyat sevgisini yaygınlaştırmak için çalışıyoruz.
                </p>
                <p className="text-muted-foreground">
                  Amacımız, edebiyatın zengin dünyasını dijital çağın
                  imkanlarıyla birleştirerek, okuyucularımıza benzersiz bir
                  okuma deneyimi sunmaktır.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Vizyonumuz</h2>
                <p className="text-muted-foreground mb-4">
                  Türkiye'nin en kapsamlı dijital edebiyat platformu olmak ve
                  edebiyat dünyasındaki gelişmeleri takip eden, analiz eden,
                  yorumlayan bir referans kaynağı haline gelmek.
                </p>
                <p className="text-muted-foreground">
                  Teknoloji ve edebiyatı harmanlayarak, geleneksel edebiyat
                  anlayışını modern bir yaklaşımla yeniden yorumlamak
                  istiyoruz.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Ekibimiz</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8">İletişim</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>{contactInfo.website}</span>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Öneri, görüş ve işbirliği talepleriniz için bizimle
                  iletişime geçebilirsiniz. Size en kısa sürede dönüş
                  yapacağız.
                </p>
                <Button asChild>
                  <Link href="/iletisim">
                    İletişim Formu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  </>
  )
}

export default About