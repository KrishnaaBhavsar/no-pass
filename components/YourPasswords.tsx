import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock } from "lucide-react"

export function YourPasswords() {
  const passwords = [
    { id: 1, website: "example.com", username: "johndoe@example.com" },
    { id: 2, website: "anothersite.com", username: "janesmith@example.com" },
  ]

  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <Card key={password.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Lock className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>{password.website}</CardTitle>
              <CardDescription>{password.username}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Password: ********</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

