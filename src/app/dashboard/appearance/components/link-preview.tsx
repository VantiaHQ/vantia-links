'use client';

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Profile, Link as LinkType } from "@/lib/data";

interface LinkPreviewProps {
    profile: Partial<Profile>;
    links: LinkType[];
}

export function LinkPreview({ profile, links }: LinkPreviewProps) {
    return (
        <div className="sticky top-24">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-muted/40">
                    <div className="text-foreground p-2.5 overflow-y-auto h-full scrollbar-hide">
                        <header className="text-center space-y-3 mb-6 pt-4">
                            <Avatar className="w-16 h-16 mx-auto">
                                <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                                <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-xl font-headline font-bold">@{profile.name}</h1>
                                <p className="text-muted-foreground text-sm mt-1 px-2">{profile.bio}</p>
                            </div>
                        </header>
                        <section className="space-y-3">
                            {links.map((link) => (
                                <Button
                                    key={link.id}
                                    variant="outline"
                                    className="w-full h-14 bg-background"
                                    asChild
                                >
                                    <div className="flex items-center justify-between w-full px-3">
                                        <div className="flex items-center gap-3">
                                            <link.Icon className="w-5 h-5 text-muted-foreground" />
                                            <span className="font-semibold text-base">{link.title}</span>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                </Button>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
