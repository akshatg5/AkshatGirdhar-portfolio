"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronDownIcon } from 'lucide-react'
import Link from "next/link"
import React from "react"

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  href?: string
  badges?: readonly string[]
  period: string
  description?: string | string[]
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md dark:hover:bg-gray-500/10 mb-3">
      <div className="p-2.5 sm:p-3">
        <div className="flex items-start">
          {/* Logo */}
          <Avatar className="h-10 w-10 border bg-muted dark:bg-muted/20 flex-shrink-0">
            <AvatarImage src={logoUrl || "/placeholder.svg"} alt={altText} className="object-contain" />
            <AvatarFallback className="text-xs">{altText[0]}</AvatarFallback>
          </Avatar>

          {/* Content */}
          <div className="ml-3 flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="font-semibold text-sm truncate">{title}</h3>
                {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
              </div>
              <div className="text-xs tabular-nums text-muted-foreground whitespace-nowrap flex-shrink-0 mt-0.5 sm:mt-0">
                {period}
              </div>
            </div>

            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1.5">
                {badges.map((badge, index) => (
                  <Badge variant="secondary" className="text-xs font-normal py-0 px-1.5" key={index}>
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {href && !description && (
              <Link href={href} className="text-xs text-primary hover:underline mt-1.5 inline-block">
                View details
              </Link>
            )}
          </div>
        </div>

        {description && (
          <div onClick={handleClick} className="mt-2 cursor-pointer">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs cursor-pointer py-0 h-5">
                {isExpanded ? "Show less" : "Show more"}
              </Badge>
              <ChevronDownIcon
                className={cn(
                  "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                  isExpanded && "rotate-180",
                )}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 overflow-hidden"
            >
              {Array.isArray(description) ? (
                <ul className="list-disc pl-4 space-y-0.5 text-xs pb-2">
                  {description.map((point, index) => (
                    <li key={index} className="text-xs">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs pb-2">{description}</p>
              )}

              {href && (
                <Link href={href} className="text-xs text-primary hover:underline inline-block mb-1">
                  View details
                </Link>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </Card>
  )
}
