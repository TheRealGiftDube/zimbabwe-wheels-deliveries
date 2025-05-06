
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Utensils, Clock, MapPin, Star, ShoppingBag, ChefHat, 
  Coffee, Pizza, Drumstick, Beef, Apple, Sandwich 
} from 'lucide-react';

const FoodServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-mydelivery-yellow py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-mydelivery-blue mb-6">
                Delicious Food Delivered To Your Door
              </h1>
              <p className="text-xl text-mydelivery-blue/80 mb-8">
                Order from your favorite restaurants and enjoy a hot, fresh meal without leaving your home or office.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mr-4">
                    <Utensils className="h-5 w-5 text-mydelivery-blue" />
                  </div>
                  <span className="text-mydelivery-blue">Wide range of restaurants and cuisines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-mydelivery-blue" />
                  </div>
                  <span className="text-mydelivery-blue">Fast delivery, most orders within 45 minutes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mydelivery-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-mydelivery-blue" />
                  </div>
                  <span className="text-mydelivery-blue">Real-time order tracking</span>
                </div>
              </div>
              <Button className="mt-8 bg-mydelivery-blue hover:bg-mydelivery-blue/90 text-white" size="lg">
                Order Food Now
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1583033363476-7b6f6bb6754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBkZWxpdmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="Food delivery service" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Food Delivery Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ordering your favorite meals with MyDelivery is simple, fast and convenient:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Browse & Select",
                description: "Choose from hundreds of local restaurants and browse their menus",
                icon: ShoppingBag,
                color: "bg-mydelivery-blue"
              },
              {
                step: 2,
                title: "Place Your Order",
                description: "Select your items, customize as needed, and place your order",
                icon: ChefHat,
                color: "bg-mydelivery-green"
              },
              {
                step: 3,
                title: "Enjoy Your Meal",
                description: "Track your order in real-time as we pick up and deliver your food",
                icon: Utensils,
                color: "bg-mydelivery-yellow"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="bg-gray-200 text-gray-800 text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Restaurants</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-rated restaurants in your area with quick delivery times
            </p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="burgers" className="flex items-center gap-2">
                <Beef className="h-4 w-4" /> Burgers
              </TabsTrigger>
              <TabsTrigger value="pizza" className="flex items-center gap-2">
                <Pizza className="h-4 w-4" /> Pizza
              </TabsTrigger>
              <TabsTrigger value="chicken" className="flex items-center gap-2">
                <Drumstick className="h-4 w-4" /> Chicken
              </TabsTrigger>
              <TabsTrigger value="healthy" className="flex items-center gap-2">
                <Apple className="h-4 w-4" /> Healthy
              </TabsTrigger>
              <TabsTrigger value="cafe" className="flex items-center gap-2">
                <Coffee className="h-4 w-4" /> Café
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Gava's Grill",
                    image: "https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlciUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    rating: 4.8,
                    cuisine: "American, Burgers",
                    deliveryTime: "30-45 min",
                    deliveryFee: "$2.00"
                  },
                  {
                    name: "Pizza Palace",
                    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    rating: 4.6,
                    cuisine: "Italian, Pizza",
                    deliveryTime: "35-50 min",
                    deliveryFee: "$2.50"
                  },
                  {
                    name: "Nando's",
                    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    rating: 4.7,
                    cuisine: "Portuguese, Chicken",
                    deliveryTime: "25-40 min",
                    deliveryFee: "$2.00"
                  },
                  {
                    name: "Fresh & Healthy",
                    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                    rating: 4.5,
                    cuisine: "Healthy, Salads",
                    deliveryTime: "25-35 min",
                    deliveryFee: "$2.25"
                  }
                ].map((restaurant, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 relative">
                      <img 
                        src={restaurant.image}
                        alt={restaurant.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center">
                        <Star className="h-4 w-4 text-mydelivery-yellow fill-mydelivery-yellow mr-1" />
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          Delivery: {restaurant.deliveryFee}
                        </span>
                      </div>
                      <Button className="w-full bg-mydelivery-green hover:bg-mydelivery-green/90">
                        View Menu
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Similar content structure would go here for other tabs */}
            <TabsContent value="burgers">
              <div className="text-center py-8">
                <Beef className="h-12 w-12 mx-auto mb-4 text-mydelivery-blue" />
                <h3 className="text-xl font-bold mb-2">Burger Restaurants</h3>
                <p className="text-gray-600">Content for burger restaurants would appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="pizza">
              <div className="text-center py-8">
                <Pizza className="h-12 w-12 mx-auto mb-4 text-mydelivery-blue" />
                <h3 className="text-xl font-bold mb-2">Pizza Restaurants</h3>
                <p className="text-gray-600">Content for pizza restaurants would appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="chicken">
              <div className="text-center py-8">
                <Drumstick className="h-12 w-12 mx-auto mb-4 text-mydelivery-blue" />
                <h3 className="text-xl font-bold mb-2">Chicken Restaurants</h3>
                <p className="text-gray-600">Content for chicken restaurants would appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="healthy">
              <div className="text-center py-8">
                <Apple className="h-12 w-12 mx-auto mb-4 text-mydelivery-blue" />
                <h3 className="text-xl font-bold mb-2">Healthy Food Options</h3>
                <p className="text-gray-600">Content for healthy food restaurants would appear here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="cafe">
              <div className="text-center py-8">
                <Coffee className="h-12 w-12 mx-auto mb-4 text-mydelivery-blue" />
                <h3 className="text-xl font-bold mb-2">Cafés</h3>
                <p className="text-gray-600">Content for cafés would appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8">
            <Button className="bg-mydelivery-blue hover:bg-mydelivery-blue/90">
              View All Restaurants
            </Button>
          </div>
        </div>
      </section>
      
      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Offers & Deals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive promotions and save on your food orders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-r from-mydelivery-blue to-blue-700 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">First Order Discount</h3>
                <p className="mb-4">Get 20% off your first order with MyDelivery</p>
                <div className="bg-white/20 rounded-lg p-3 mb-4 text-center">
                  <span className="font-bold text-lg">Use code: WELCOME20</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/20">
                  Apply Discount
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-mydelivery-yellow to-amber-500 text-mydelivery-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
                <p className="mb-4">Free delivery on orders over $15 this weekend</p>
                <div className="bg-white/60 rounded-lg p-3 mb-4 text-center">
                  <span className="font-bold text-lg">Use code: FREEDEL</span>
                </div>
                <Button variant="outline" className="w-full border-mydelivery-blue text-mydelivery-blue hover:bg-mydelivery-blue/10">
                  Apply Discount
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-mydelivery-green to-green-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Lunch Special</h3>
                <p className="mb-4">15% off all orders between 12PM and 2PM</p>
                <div className="bg-white/20 rounded-lg p-3 mb-4 text-center">
                  <span className="font-bold text-lg">Use code: LUNCH15</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/20">
                  Apply Discount
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our food delivery service
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does food delivery take?",
                answer: "Delivery times vary depending on your distance from the restaurant, time of day, and the restaurant's preparation time. Most orders are delivered within 30-45 minutes. You can see the estimated delivery time before you place your order."
              },
              {
                question: "Is there a minimum order amount?",
                answer: "Each restaurant sets their own minimum order amount. This information is displayed on the restaurant's page before you start adding items to your cart."
              },
              {
                question: "What if my food arrives cold or incorrect?",
                answer: "Customer satisfaction is our priority. If your order arrives cold, damaged, or incorrect, please contact our customer support within 30 minutes of delivery, and we'll make it right with a refund or replacement."
              },
              {
                question: "How do I pay for my order?",
                answer: "We accept cash on delivery, mobile money payments (EcoCash, OneMoney), and credit/debit cards through our secure payment gateway."
              },
              {
                question: "Can I schedule a food delivery in advance?",
                answer: "Yes! You can schedule orders up to 24 hours in advance. Simply select your preferred delivery time during checkout."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodServicePage;
