"use client"

import type React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { JSX } from "react/jsx-runtime"
import { ExternalLink } from "lucide-react"

interface Highlight {
  text: string
  type: "link" | "tooltip"
  href?: string
  tooltip?: {
    title: string
    description?: string
    image?: string
  }
}

interface HighlightedTextProps {
  text: string
  highlights?: Highlight[]
  className?: string
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlights = [], className = "" }) => {
  if (!highlights.length) {
    return <span className={className}>{text}</span>
  }

  // Sort highlights by position in text (longest first to avoid conflicts)
  const sortedHighlights = highlights
    .map((highlight) => ({
      ...highlight,
      index: text.toLowerCase().indexOf(highlight.text.toLowerCase()),
    }))
    .filter((highlight) => highlight.index !== -1)
    .sort((a, b) => b.text.length - a.text.length)

  const processedText = text
  const replacements: Array<{ original: string; replacement: JSX.Element; index: number }> = []

  sortedHighlights.forEach((highlight, idx) => {
    const key = `highlight-${idx}`

    if (highlight.type === "link" && highlight.href) {
      const linkElement = (
        <Link
          key={key}
          href={highlight.href}
          className="group relative inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40 px-2 py-0.5 rounded-md border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 hover:shadow-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {highlight.text}
          <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      )
      replacements.push({
        original: highlight.text,
        replacement: linkElement,
        index: highlight.index,
      })
    } else if (highlight.type === "tooltip" && highlight.tooltip) {
      const tooltipElement = (
        <TooltipProvider key={key}>
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <span className="relative z-10 inline-block cursor-help font-medium text-emerald-700 dark:text-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/40 dark:hover:to-teal-900/40 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-200 hover:shadow-sm before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-emerald-400 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0">
                {highlight.text}
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="p-0 max-w-sm border-0 shadow-2xl z-[9999] relative"
              sideOffset={8}
              avoidCollisions={true}
              collisionPadding={16}
            >
              <Card className="border border-gray-200/80 dark:border-gray-700/80 shadow-xl bg-white/98 dark:bg-gray-900/98 backdrop-blur-md overflow-hidden relative z-[9999]">
                {highlight.tooltip.image && (
                  <div
                    className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                    onClick={() => {
                      if (highlight.tooltip?.image) {
                        window.location.href = highlight.tooltip.image
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open image: ${highlight.tooltip.title}`}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") {
                        if (highlight.tooltip?.image) {
                          window.location.href = highlight.tooltip.image
                        }
                      }
                    }}
                  >
                    <Image
                      src={highlight.tooltip.image || "/placeholder.svg"}
                      alt={highlight.tooltip.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 384px) 100vw, 384px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="p-4 relative z-10">
                  <h4 className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100 leading-tight">
                    {highlight.tooltip.title}
                  </h4>
                  {highlight.tooltip.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.tooltip.description}
                    </p>
                  )}
                </div>
              </Card>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
      replacements.push({
        original: highlight.text,
        replacement: tooltipElement,
        index: highlight.index,
      })
    }
  })

  // Create the final JSX with replacements
  const renderTextWithHighlights = () => {
    if (!replacements.length) return text

    const parts: (string | JSX.Element)[] = []
    let lastIndex = 0

    // Sort replacements by their position in the original text
    const sortedReplacements = replacements.sort((a, b) => a.index - b.index)

    sortedReplacements.forEach((replacement, idx) => {
      const startIndex = text.indexOf(replacement.original, lastIndex)

      if (startIndex > lastIndex) {
        parts.push(text.slice(lastIndex, startIndex))
      }

      parts.push(replacement.replacement)
      lastIndex = startIndex + replacement.original.length
    })

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.map((part, idx) => (typeof part === "string" ? <span key={`text-${idx}`}>{part}</span> : part))
  }

  return <span className={className}>{renderTextWithHighlights()}</span>
}
