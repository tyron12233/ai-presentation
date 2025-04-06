import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function useCurrentSlide() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        supabase.from('public_data').select('*')
            .then(({ data, error }) => {
                if (error) {
                    console.error("Error fetching current slide:", error);
                } else {
                    setCurrentSlide(data[0].current_slide);
                }
            });

        const subscription = supabase.channel('public_data')
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'public_data' }, (payload) => {
                console.log('Change received!', payload);
                setCurrentSlide(payload.new.current_slide);
            });
        
        subscription.subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('Subscribed to changes');
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return [
        currentSlide
    ]
}