'use client';
import { useState, useEffect } from 'react';
import { AppearanceForm } from './components/appearance-form';
import { LinkPreview } from './components/link-preview';
import type { Profile, Link as LinkType } from "@/lib/data";
import { useSupabase } from '@/supabase/provider';

export default function AppearancePage() {
    const { supabase } = useSupabase();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [links, setLinks] = useState<LinkType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!supabase) return;

            setLoading(true);

            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', 'mainProfile')
                .single();

            if (profileError) {
                setError(profileError.message);
            } else {
                setProfile(profileData);
            }

            const { data: linksData, error: linksError } = await supabase
                .from('analytics')
                .select('*');

            if (linksError) {
                setError(linksError.message);
            } else {
                setLinks(linksData);
            }

            setLoading(false);
        };

        fetchData();
    }, [supabase]);

    const handleProfileChange = async (newProfileData: Partial<Profile>) => {
        if (!supabase || !profile) return;

        const { data, error } = await supabase
            .from('profiles')
            .update(newProfileData)
            .eq('id', profile.id);

        if (error) {
            setError(error.message);
        } else {
            setProfile(prev => (prev ? { ...prev, ...newProfileData } : null));
        }
    };

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error loading data: {error}</div>;
    }

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                {profile && <AppearanceForm initialProfile={profile} onProfileChange={handleProfileChange} />}
            </div>
            <div className="hidden lg:block">
                {profile && links && <LinkPreview profile={profile} links={links} />}
            </div>
        </div>
    );
}