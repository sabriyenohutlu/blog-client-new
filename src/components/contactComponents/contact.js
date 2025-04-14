'use client';

import { NextSeo } from 'next-seo';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";

const contactInfo = {
    address: {
      street: "İstiklal Caddesi No: 123",
      district: "Beyoğlu",
      city: "İstanbul",
      country: "Türkiye",
      postalCode: "34433"
    },
    contact: {
      email: "iletisim@edebiakis.com",
      phone: "+90 (212) 555 0123",
      fax: "+90 (212) 555 0124"
    },
    workingHours: {
      weekdays: "09:00 - 18:00",
      weekend: "10:00 - 14:00 (Cumartesi)",
      closed: "Pazar günleri kapalı"
    }
  };
  const contactTopics = [
    { value: "general", label: "Genel Bilgi" },
    { value: "content", label: "İçerik Önerisi" },
    { value: "technical", label: "Teknik Destek" },
    { value: "business", label: "İş Birliği" },
    { value: "other", label: "Diğer" }
  ];

const Contact = () => {
  return (
    <>
      <NextSeo
        title="İletişim - Edebi Akış"
        description="Edebi Akış ile iletişime geçin"
        openGraph={{
          title: 'İletişim - Edebi Akış',
          description: 'Edebi Akış ile iletişime geçin',
        }}
      />
      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section>
            <Card>
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold mb-6">İletişim Formu</h1>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ad</Label>
                      <Input id="firstName" placeholder="Adınız" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyad</Label>
                      <Input id="lastName" placeholder="Soyadınız" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" placeholder="ornek@mail.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Konu</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Konu seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactTopics.map((topic) => (
                          <SelectItem key={topic.value} value={topic.value}>
                            {topic.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Gönder
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Contact Info */}
          <section className="space-y-6">
            {/* Address Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Adres</h2>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.district}</p>
                  <p>
                    {contactInfo.address.city}, {contactInfo.address.postalCode}
                  </p>
                  <p>{contactInfo.address.country}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">İletişim Bilgileri</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4" />
                    <span>{contactInfo.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4" />
                    <span>{contactInfo.contact.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Çalışma Saatleri</h2>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>Hafta içi: {contactInfo.workingHours.weekdays}</p>
                  <p>Hafta sonu: {contactInfo.workingHours.weekend}</p>
                  <p className="text-sm">{contactInfo.workingHours.closed}</p>
                </div>
              </CardContent>
            </Card>

            {/* Map Embed */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.952117296219!2d28.97661!3d41.033333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2zQmV5b8SfbHUsIMSwc3RhbmJ1bA!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}

export default Contact