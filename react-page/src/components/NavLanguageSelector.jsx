import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"

const NavLanguageSelector = ({ currentLanguage, availableLanguages, changeLanguage }) => {
  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage) || availableLanguages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <Globe className="h-4 w-4" />
          {currentLang?.name || 'Language'}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {availableLanguages.map((language) => (
          <DropdownMenuItem 
            key={language.code} 
            onClick={() => changeLanguage(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{language.name}</span>
            {language.code === currentLanguage && (
              <span className="text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavLanguageSelector 