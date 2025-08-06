import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone submitted:", phone);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Клиенты с сайтов<br />
            конкурентов —<br />
            <span className="text-blue-600">уже завтра</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Горячие лиды без аукционов, дорогой рекламы и лишних затрат
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl rounded-xl">
            Запустить тест от 50 000 ₽
          </Button>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-0 shadow-none text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Парсим контакты</h3>
                <p className="text-slate-600">
                  Собираем контакты с сайтов ваших конкурентов автоматически
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Phone" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Звоним и квалифицируем</h3>
                <p className="text-slate-600">
                  Обзваниваем по скриптам и квалифицируем заинтересованных клиентов
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Target" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Передаём "горячих"</h3>
                <p className="text-slate-600">
                  Отдаём только заинтересованных клиентов, готовых к покупке
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Знакомые проблемы?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <Icon name="TrendingDown" size={48} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Реклама стоит дорого
                </h3>
                <p className="text-slate-600">
                  И при этом работает всё хуже и хуже
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <Icon name="Users" size={48} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  95% посетителей ушли
                </h3>
                <p className="text-slate-600">
                  Не оставив заявки на сайте
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <Icon name="PhoneOff" size={48} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Мало звонков
                </h3>
                <p className="text-slate-600">
                  Конвертируются в реальные встречи
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="TrendingUp" size={32} className="text-green-500 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      До 40% конверсия со звонков
                    </h3>
                    <p className="text-slate-600">
                      Высокое качество лидов гарантирует результат
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="DollarSign" size={32} className="text-green-500 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      В 2-3 раза дешевле рекламы
                    </h3>
                    <p className="text-slate-600">
                      Чем заявки в Директе или ВКонтакте
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Shield" size={32} className="text-green-500 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      Гарантия возврата денег
                    </h3>
                    <p className="text-slate-600">
                      Если не выполним обещания
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="Briefcase" size={32} className="text-green-500 flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                      Работает в 20+ нишах
                    </h3>
                    <p className="text-slate-600">
                      Недвижимость, услуги, финансы и другие
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Результаты клиентов
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">+34,5%</div>
                <p className="text-xl text-slate-700">встреч по сравнению с прошлым годом</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">+7,34 млн ₽</div>
                <p className="text-xl text-slate-700">добавочной выручки</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-slate-600 mb-8">Нам доверяют крупные операторы:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold">
                Ростелеком
              </div>
              <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
                МТС
              </div>
              <div className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
                Tele2
              </div>
              <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
                Билайн
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-900">
              92,7% клиентов продлевают сотрудничество после тестового периода
            </p>
          </div>
        </div>
      </section>

      {/* Cooperation Formats */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Форматы сотрудничества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Icon name="Zap" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Тестовый запуск
                </h3>
                <p className="text-slate-600 mb-4">
                  от 50 000 ₽
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-8 text-center">
                <Icon name="CheckCircle" size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Оплата за результат
                </h3>
                <p className="text-slate-600 mb-4">
                  Только за квалифицированные лиды
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-8 text-center">
                <Icon name="Send" size={48} className="text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Удобная подача
                </h3>
                <p className="text-slate-600 mb-4">
                  Telegram, CRM или Excel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы получать горячих<br />клиентов уже на этой неделе?
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="tel"
              placeholder="Ваш телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-white text-slate-900 border-0 h-14 text-lg"
              required
            />
            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8">
              Получить лидов
            </Button>
          </form>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-xl"
          >
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-lg text-slate-700 mb-2">
              <strong>Контакты:</strong> +7 981 703-95-26
            </p>
            <p className="text-lg text-slate-700">
              Telegram: @dergach_viktor
            </p>
          </div>
          <p className="text-sm text-slate-500 italic">
            Работаем с официальными операторами связи. Все данные получаем законно.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;