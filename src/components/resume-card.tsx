"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon, ExternalLink, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HighlightedText } from "./highlighted-text";

interface Highlight {
  text: string;
  type: "link" | "tooltip";
  href?: string;
  tooltip?: {
    title: string;
    description?: string;
    image?: string;
  };
}

interface DescriptionItem {
  text: string;
  highlights?: Highlight[];
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  location?: string;
  description?: string | (string | DescriptionItem)[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  location,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const renderDescription = () => {
    if (!description) return null;

    if (Array.isArray(description)) {
      return (
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {description.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
              <span className="flex-1">
                {typeof point === "string" ? (
                  point
                ) : (
                  <HighlightedText
                    text={point.text}
                    highlights={point.highlights || []}
                  />
                )}
              </span>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pb-2">
          {description}
        </p>
      );
    }
  };

  return (
    <Card
      onClick={handleClick}
      className="group cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50  hover:border-gray-300/80 dark:hover:border-gray-600/80 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-black backdrop-blur-sm mb-4"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30 dark:from-gray-800/30 dark:via-transparent dark:to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-4 sm:p-5">
        <div className="flex items-start gap-4">
          {/* Enhanced Logo */}
          <div className="relative">
            <Avatar className="h-12 w-12 rounded-xl border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
              <AvatarImage
                src={logoUrl || "/placeholder.svg"}
                alt={altText}
                className="object-contain rounded-full p-1"
              />
              <AvatarFallback className="text-sm font-semibold bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-white">
                {altText[0]}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          {/* Enhanced Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-2 lg:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-base text-gray-900 dark:text-white truncate">
                    {title}
                  </h3>
                  {href && (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-blue-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                {/* Enhanced Period and Location */}
                <div className="flex flex-wrap justify-between items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <div>
                    {subtitle && (
                      <p className="text-sm font-medium text-gray-600 dark:text-white truncate">
                        {subtitle}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span className="font-medium dark:text-white">{period} || </span>
                    {location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 dark:text-white" />
                        <span className="dark:text-white">{location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Description Section */}
        {description && (
          <div className="mt-4">
            <div
              onClick={handleClick}
              className="flex items-center justify-between cursor-pointer group/expand hover:bg-gray-50/50 dark:hover:bg-gray-800/50 -mx-2 px-2 py-1.5 rounded-lg transition-colors duration-200"
            >
              <Badge
                variant="outline"
                className="text-xs font-medium py-1 px-3 bg-white/80 dark:bg-gray-800/80 border-gray-300/60 dark:border-gray-600/60 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
              >
                {isExpanded ? "Show less" : "Show details"}
              </Badge>
              <ChevronDownIcon
                className={cn(
                  "h-4 w-4 text-gray-400 transition-all duration-300 group-hover/expand:text-gray-600 dark:group-hover/expand:text-gray-300",
                  isExpanded && "rotate-180 text-gray-600 dark:text-gray-300"
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
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2">
                {renderDescription()}
                {/* {href && (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mt-3 hover:underline transition-colors duration-200"
                  >
                    View project details
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                )} */}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Card>
  );
};
