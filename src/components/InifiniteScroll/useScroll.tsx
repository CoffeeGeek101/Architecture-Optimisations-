import { useCallback, useEffect, useRef, useState, type RefObject } from "react"


export const useScroll = (viewportRef : RefObject<HTMLDivElement | null>, sentinelRef : RefObject<HTMLDivElement | null>) => {

    // an API to call the initial set of data. 
    // once done, increment the limit and page based on the limit. 
    // dependency will be the calculation of threshold.

    // it need us to pass the ref of the viewport we want the inifinte scroll.

    const [limit, setLimit] = useState<number>(20);
    const [page, setPage] = useState<number>(0); //2 is the threshold, we are allowing 200items;
    const [hasReachedBottom, setHasReachedBottom] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [fetchMore, setFetchMore] = useState<boolean>(false);
    const inFlightRequests = useRef(new Set<string>()); 

    console.log(limit,page);

    const getData = useCallback( async() => {
        if(hasReachedBottom) return;

        if(inFlightRequests.current.has(`${limit}-${page}`)) return;

        try {
            inFlightRequests.current.add(`${limit}-${page}`);
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
            // we can handle the API failures here
            const json_data = await res.json(); 
            setData((prev : any) => {
                const dataMap : Map<any,any> = new Map(prev.map((item : any) => [item.id, item]));
                for(let i = 0; i<json_data.length; i++){
                    dataMap.set(json_data[i].id, json_data[i]);
                }
                return [...dataMap.values()];
            });

            setLimit((prev : any) => {
                const limit = prev + 20;
                if(limit > 100){
                    setPage(prev => {
                        console.log("nani tf ?")
                        const page = prev + 1;
                        if(page > 2){
                            console.log("nani tf ?")
                            setHasReachedBottom(true);
                            return page;
                        }
                        return page
                    });
                    return 20;
                }
                return limit;
            });
        }catch (e) {
            console.log(e)
        }
    },[limit, page, hasReachedBottom]);

    // const handleScroll = () => {
    //     let sT = viewportRef.current?.scrollTop;
    //     let cH = viewportRef.current?.clientHeight;
    //     let sH = viewportRef.current?.scrollHeight;

    //     if(Math.ceil(sT! + cH!) >= Math.ceil(sH! - 200)){
    //         setFetchMore(true);
    //     }
    // }

    useEffect(()=>{

        const viewport = viewportRef.current;
        const sentinel = sentinelRef.current;

        if(!viewport || !sentinel) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setFetchMore(true);
            };
        }, {root : viewport, rootMargin : '0px 0px 200px 0px', threshold:0});

        observer.observe(sentinel);
        return () => observer.disconnect();
    },[]);

    useEffect(()=>{
        getData();
        return ()=> setFetchMore(false);
    },[fetchMore]);


    return {data, getData, hasReachedBottom}
}