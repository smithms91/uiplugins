import * as React from "react"
import { ChevronRight, File, Folder } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  changes: [
    {
      file: "README.md",
      state: "M",
    },
  ],
  tree: [
    [
      "headers",
      "header-1",
      "header-2",
      "header-3",
      "header-4",
      "header-5",
      "header-6",
      // [
      //   "sticky",
      //   // ["hello", ["route.ts"]],
      //   "page.tsx",
      //   "layout.tsx",
      //   // ["blog", ["page.tsx"]],
      // ],
    ],
    [
      "hero",
      "hero-1",
      "hero-2",
      "hero-3",
      "hero-4",
      "hero-5",
      "hero-6",
      // ["ui", "button.tsx", "card.tsx"],
      // "header.tsx",
      // "footer.tsx",
    ],
    ["navigation", "navigation-1", "navigation-2", "navigation-3", "navigation-4", "navigation-5"],
    ["footer", "footer-1", "footer-2", "footer-3", "footer-4", "footer-5"],
    // ["lib", ["util.ts"]],
    // ["public", "favicon.ico", "vercel.svg"],
    // ".eslintrc.json",
    // ".gitignore",
    // "next.config.js",
    // "tailwind.config.js",
    // "package.json",
    // "README.md",
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Introduction</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.changes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <File />
                    {item.file}
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => (
                <Tree key={index} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Tree({ item }: { item: string | any[] }) {
  const [name, ...items] = Array.isArray(item) ? item : [item]

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >
        <File />
        {name}
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((subItem, index) => (
              <Tree key={index} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
