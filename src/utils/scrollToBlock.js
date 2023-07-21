export const scrollToBlock =  (block) => {

    block.current?.scrollIntoView({
        behavior: 'smooth',
             });

}
