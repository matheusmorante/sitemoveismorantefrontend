import { UserProvider } from "./UserContext";
import { ProductsProvider } from "./ProductsCatalogContext";
import { CartProvider } from "./CartContext";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <UserProvider>
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  </UserProvider>
);