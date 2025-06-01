import { AvatarFallback } from "@radix-ui/react-avatar";
import { Clock, Heart, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

export interface Root2 {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id?: string;
  published_timestamp: string;
  language?: string;
  subforem_id?: string;
  positive_reactions_count: number;
  cover_image?: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at?: string;
  crossposted_at?: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

export interface User {
  name: string;
  username: string;
  twitter_username?: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

interface BlogCardProps {
  post: Root2;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const displayTags = post.tag_list.slice(0, 3);

  return (
    <Card
      className={`group relative overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-brand/20 ${className}`}
    >
      <CardContent className="p-4 space-y-3">
        {/* Header with user info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-8 w-8 ring-2 ring-transparent group-hover:ring-brand/30 transition-all duration-300 hover:scale-110">
              <AvatarImage
                src={post.user.profile_image_90 || "/placeholder.svg"}
                alt={post.user.name}
                className="object-cover"
              />
              <AvatarFallback className="text-xs bg-brand/10 text-brand font-medium">
                {post.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 rounded-full bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-card-foreground truncate">
              {post.user.name}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{post.readable_publish_date}</span>
            </div>
          </div>
        </div>

        {/* Cover image */}
        {post.cover_image && (
          <div className="relative overflow-hidden rounded-md bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.cover_image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          <Link
            href={post.url}
            className="font-semibold text-card-foreground leading-tight line-clamp-2 group-hover:text-blue-500 transition-colors duration-200"
          >
            {truncateText(post.title, 80)}
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {truncateText(post.description, 120)}
          </p>
        </div>

        {/* Tags */}
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {displayTags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-secondary  transition-colors duration-200"
              >
                #{tag}
              </Badge>
            ))}
            {post.tag_list.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{post.tag_list.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Footer stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              <span>{post.positive_reactions_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              <span>{post.comments_count}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{post.reading_time_minutes} min read</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
