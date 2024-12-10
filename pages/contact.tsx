import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          2024 оны 10 сарын шинэ элсэлтээ авч эхэллээ
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Та бүхнийг урьж байна!
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Өглөөний анги
          </h2>
          <p className="text-gray-700 mt-2">
            ⏰ 06:00 цагаас - Даваа, Лхагва, Баасан гаригт.
          </p>
          <p className="text-gray-700 mt-2">
            → Та өглөө ирэх боломжгүй бол оройн анги бас бий.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Оройн анги</h2>
          <p className="text-gray-700 mt-2">
            ⏰ 19.30 цагаас - Даваа, Лхагва, Баасан гаригт.
          </p>
          <p className="text-gray-700 mt-2">
            🏢 Бөхийн өргөөний урд Road HQ барилгад дэвжээ байрлана.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Хүүхдийн анги
          </h2>
          <p className="text-gray-700 mt-2">
            ⏰ Бямба, Ням гаригт 12.00 цагаас хичээллэнэ.
          </p>
          <p className="text-gray-700 mt-2">
            🏢 Four Seasons Wellness төвд зөвхөн хүүхдийн анги бий.
          </p>
          <p className="text-gray-700 mt-2">
            📞 Энэ талаар 77073377 утсаар лавлаарай.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600">
            Сарын төлбөр: 150,000 төгрөг
          </h2>
          <p className="text-gray-700 mt-2">📞 Холбоо барих утас: 8070-0888</p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Бидэнтэй холбогдох
          </h2>
          <p className="text-gray-600 mt-4">
            Хэрэв та бүртгүүлэх эсвэл илүү дэлгэрэнгүй мэдээлэл авахыг хүсвэл
            дээрх утаснуудаар холбогдоно уу.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
