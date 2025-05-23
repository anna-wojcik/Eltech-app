import { useState } from "react";
import ApplicatinForm from "../ApplicationForm";
import FormSummary from "../FormSummary";

export default () => {
    const [showSummary, setShowSummary] = useState(false);

    if (!showSummary) {
        return (
            <ApplicatinForm setShowSummary={setShowSummary}/>
        )
    } else {
        return (
            <FormSummary />
        )
    }
}