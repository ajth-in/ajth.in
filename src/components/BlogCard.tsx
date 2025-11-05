import { AvatarFallback } from "@radix-ui/react-avatar";
import { Clock, Heart, MessageCircle, Calendar } from "lucide-react";
import { useLocale } from "next-intl";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/types/blog";
import Link from "next/link";

interface BlogCardProps {
  post: Blog;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const locale = useLocale();

  const displayTags = post.tag_list.slice(0, 3);

  return (
    <Link href={`${locale}/blog/${post.id}`}>
      <div
        className={`group relative hover:bg-black flex flex-row items-stretch gap-4 overflow-hidden 
         text-neutral-50 border-4 dark:border-neutral-800 border-neutral-400
        [image-rendering:pixelated] 
        dark:shadow-[4px_4px_0px_rgba(255,255,255,0.5)] 
        dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,0.5)] 
        shadow-[4px_4px_0px_rgba(0,0,0,0.2)] 
        hover:shadow-[6px_6px_0px_rgba(0,0,0,0.8)]
        transition-all duration-200 ${className}`}
      >
        <div className="flex flex-col justify-between p-3 flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-neutral-700 [image-rendering:pixelated]">
              <AvatarImage
                src={post.user.profile_image_90 || "/placeholder.svg"}
                alt={post.user.name}
                className="object-cover [image-rendering:pixelated]"
              />
              <AvatarFallback className="text-xs bg-black text-neutral-50 font-monosans">
                {post.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-lg  text-primary font-bold font-monosans truncate">
                {post.user.name}
              </p>
              <div className="flex items-center gap-1 text-sm text-neutral-400 font-monosans">
                <Calendar className="h-3 w-3" />
                <span>{post.readable_publish_date}</span>
              </div>
            </div>
          </div>

          {/* Title + description */}
          <div className="space-y-1">
            <h2 className="block text-2xl font-monosans font-bold leading-snug line-clamp-2 text-black  dark:text-white  transition-colors">
              {truncateText(post.title, 60)}
            </h2>
            <p className="text-sm text-neutral-400  line-clamp-2">
              {truncateText(post.description, 100)}
            </p>
          </div>

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {displayTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-lg font-monosans  border border-neutral-700 px-2 py-0.5 [image-rendering:pixelated]"
                >
                  #{tag}
                </Badge>
              ))}
              {post.tag_list.length > 3 && (
                <Badge
                  variant="outline"
                  className="text-[10px] font-monosans border border-neutral-600"
                >
                  +{post.tag_list.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t-2 border-neutral-100 dark:border-neutral-700">
            <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-monosans">
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{post.positive_reactions_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3" />
                <span>{post.comments_count}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-monosans">
              <Clock className="h-3 w-3" />
              <span>{post.reading_time_minutes} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
