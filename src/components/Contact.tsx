import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-[#1c1c1c] border-[#232323] shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input placeholder="Your name" className="bg-[#232323] border-[#333333] text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" className="bg-[#232323] border-[#333333] text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input placeholder="Message subject" className="bg-[#232323] border-[#333333] text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[150px] bg-[#232323] border-[#333333] text-white"
                    />
                  </div>
                  <Button className="w-full bg-[#3ecf8e] hover:bg-[#4ffca6] text-black">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="bg-[#1c1c1c] border-[#232323] text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#3ecf8e]" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">shubham@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1c1c1c] border-[#232323] text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#3ecf8e]" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1c1c1c] border-[#232323] text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#3ecf8e]" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">New Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}