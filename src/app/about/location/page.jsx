export default function Location() {
    return (
        <section id="about" className="py-12">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">오시는 길</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.6397432964004!2d126.89171257632228!3d37.539988725649266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5188bb30ef5%3A0xc27fcb1d1e119f6b!2z7KSR7JWZ7J6l7JWg7J246raM7J217Ji57Zi46riw6rSA!5e0!3m2!1sko!2skr!4v1729402052677!5m2!1sko!2skr"
                    width="100%"
                    height="580"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
