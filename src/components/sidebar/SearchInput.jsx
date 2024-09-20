import { Search } from "lucide-react";
import { useState } from "react";
import useConversation from "../../hooks/useConversation";
import { useSelector } from "react-redux";
import { showToast } from "../../utils/showToast";
const SearchInput = () => {
  const { setConversation } = useConversation();
  const allConversations = useSelector(
    (state) => state?.conversation?.conversations
  );
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm?.trim()) return;
    if (searchTerm?.length < 3) {
      return showToast(
        "Search term must be at least 3 characters long",
        "error"
      );
    }
    const conversation = allConversations?.find((c) =>
      c?.fullname?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    if (conversation) {
      setConversation(conversation);
      setSearchTerm("");
    }
	else{
		showToast("User not found", "error");
	}
  };
  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input-sm md:input input-bordered rounded-full sm:rounded-full w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="btn md:btn-md btn-sm btn-circle bg-sky-500 text-white  "
      >
        <Search className="w-4 h-4 md:w-6 md:h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
