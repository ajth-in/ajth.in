import {
  Calendar,
  Clock,
  MessageCircle,
  Heart,
  ExternalLink,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { type Blog } from "~/types";

interface BlogHeaderProps {
  post: Blog;
}

export function BlogHeader({ post }: BlogHeaderProps) {
  return (
    <header className="space-y-6">
      {/* Cover Image */}
      {post.cover_image && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover_image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Title and Description */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        )}
      </div>

      {/* Author and Meta Information */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-y border-border">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={post.user.profile_image || "/placeholder.svg"}
              alt={post.user.name}
            />
            <AvatarFallback className="bg-brand text-primary font-semibold">
              {post.user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">
                {post.user.name}
              </h3>
              <span className="text-muted-foreground">
                @{post.user.username}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.readable_publish_date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time_minutes} min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {post.user.twitter_username && (
            <a
              href={`https://twitter.com/${post.user.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {post.user.github_username && (
            <a
              href={`https://github.com/${post.user.github_username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {post.user.website_url && (
            <a
              href={post.user.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Stats and Tags */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Engagement Stats */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{post.positive_reactions_count} reactions</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{post.comments_count} comments</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-brand/10 text-foreground hover:bg-brand/20 transition-colors"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
