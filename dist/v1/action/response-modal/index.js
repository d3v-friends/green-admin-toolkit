"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ModalToggler from "../../modal/toggler/index.js";
export default function ({ state, children }) {
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        if (!state)
            return;
        if (time === state.time)
            return;
        setOpen(true);
        setTime(state.time);
    }, [state]);
    if (state.err)
        return null;
    if (!children)
        return null;
    if (!state.response)
        return null;
    return (_jsx(ModalToggler, { open: open, onChange: setOpen, children: children(setOpen, state.response) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdjEvYWN0aW9uL3Jlc3BvbnNlLW1vZGFsL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFFNUQsT0FBTyxZQUFZLE1BQU0scUJBQXFCLENBQUM7QUFTL0MsTUFBTSxDQUFDLE9BQU8sV0FBNEIsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFtQztJQUM1RixNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUVoQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixJQUFJLEtBQUssQ0FBQyxHQUFHO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDM0IsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVqQyxPQUFPLENBQ04sS0FBQyxZQUFZLElBQ1osSUFBSSxFQUFFLElBQUksRUFDVixRQUFRLEVBQUUsT0FBTyxZQUNoQixRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FDcEIsQ0FDZixDQUFDO0FBQ0gsQ0FBQyJ9