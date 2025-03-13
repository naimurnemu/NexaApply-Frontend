import MakeLazy from "../../utils/MakeLazy";

const AdmissionForm = MakeLazy(() => import("./AdmissionForm"));
const CollgeCard = MakeLazy(() => import("./CollgeCard"));
const CollegeGallery = MakeLazy(() => import("./CollegeGallery"));
const ReviewSection = MakeLazy(() => import("./ReviewSection"));

export { AdmissionForm, CollgeCard, CollegeGallery, ReviewSection };
