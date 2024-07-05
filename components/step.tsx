
export default function Step({ title, text, icon }: { title: string, text: string, icon: React.ReactElement }) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-none bg-muted rounded-full w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">
          {text}
        </p>
      </div>
    </div>
  )
}

