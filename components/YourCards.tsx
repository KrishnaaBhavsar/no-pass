import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard } from "lucide-react"

export function YourCards() {
  const cards = [
    { id: 1, name: "John Doe", number: "**** **** **** 1234", expiry: "12/24" },
    { id: 2, name: "Jane Smith", number: "**** **** **** 5678", expiry: "06/25" },
  ]

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <Card key={card.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <CreditCard className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription>{card.number}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Expires: {card.expiry}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

