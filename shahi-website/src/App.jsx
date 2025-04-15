
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-10 font-sans">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-4">Shahi Ayad Ftah</h1>
        <p className="text-xl text-gray-300 mb-6">
          Informatics Student @ UiO | Software Developer & Tech Enthusiast
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/ShahiFtah" target="_blank">
            <Button variant="secondary"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/shahiftah/" target="_blank">
            <Button variant="secondary"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">Om meg</h2>
        <p className="text-gray-300">
          Jeg er informatikkstudent ved Universitetet i Oslo (UiO), spesialisert i Programmering og Systemarkitektur. Jeg brenner for å bruke teknologi til å løse komplekse problemer, og elsker å kode løsninger som faktisk fungerer.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">Ferdigheter</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li><strong>Programmering:</strong> Python, Java, C, SQL, Scheme, Kotlin</li>
          <li><strong>Verktøy:</strong> Git, GitHub, Linux/Unix, Windows, M365</li>
          <li><strong>Metoder:</strong> Agile, DevOps, Scrum, Kanban, CI/CD, TDD</li>
          <li><strong>Språk:</strong> Norsk og engelsk (flytende)</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6">Prosjekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">Medical System (Java)</h3>
              <p className="text-gray-400 mb-2">
                Java-basert helsesystem laget i IN1010 – demonstrerer objektorientert design og modulær struktur.
              </p>
              <a
                href="https://github.com/ShahiFtah/legesystem"
                className="text-blue-400 underline"
                target="_blank"
              >
                GitHub-link
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-2">UDP Directory Client (C)</h3>
              <p className="text-gray-400 mb-2">
                Lettvekts katalogklient med eget ACK-system og trestruktur for effektiv oppslag.
              </p>
              <a
                href="https://github.com/ShahiFtah/UDP-Directory-Service-Client"
                className="text-blue-400 underline"
                target="_blank"
              >
                GitHub-link
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-6">
          <a
            href="https://github.com/ShahiFtah?tab=repositories"
            className="text-blue-400 underline"
            target="_blank"
          >
            Se flere prosjekter på GitHub →
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-4">Erfaring</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Teaching Assistant @ UiO (IN1020)</li>
          <li>Kiwi Minipris – Butikkmedarbeider</li>
          <li>Erik Hauge Transport – Logistikk og sesongarbeid</li>
          <li>Nortura SA – Sommerjobb, produksjon</li>
          <li>Rayksuger EB – Gründer, Ungt Entreprenørskap</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Kontakt</h2>
        <p className="text-gray-300">📍 Oslo, Norge</p>
        <p className="text-gray-300">📧 shahiftah@gmail.com (eller bruk LinkedIn)</p>
        <p className="text-gray-300">📞 +47 97355238</p>
      </section>
    </main>
  );
}
