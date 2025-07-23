import { useSearchParams } from "react-router-dom";

export function useUrlPosition()

{
    const [searchParams] = useSearchParams()
    const latParam = searchParams.get('lat');
    const lngParam = searchParams.get('lng');
    const lat = latParam ? parseFloat(latParam) : null;
    const lng = lngParam ? parseFloat(lngParam) : null;

    return [lat, lng];
}