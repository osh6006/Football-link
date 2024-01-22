export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      league: {
        Row: {
          country: string | null
          created_at: string
          flag: string | null
          id: string
          logo: string | null
          name: string | null
          rapid_football_league_id: number | null
          sport_id: number | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          flag?: string | null
          id?: string
          logo?: string | null
          name?: string | null
          rapid_football_league_id?: number | null
          sport_id?: number | null
        }
        Update: {
          country?: string | null
          created_at?: string
          flag?: string | null
          id?: string
          logo?: string | null
          name?: string | null
          rapid_football_league_id?: number | null
          sport_id?: number | null
        }
        Relationships: []
      }
      sport_leagues: {
        Row: {
          created_at: string
          id: string
          sports_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          sports_id: string
        }
        Update: {
          created_at?: string
          id?: string
          sports_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sport_leagues_sports_id_fkey"
            columns: ["sports_id"]
            isOneToOne: false
            referencedRelation: "sports"
            referencedColumns: ["id"]
          }
        ]
      }
      sports: {
        Row: {
          created_at: string
          icon: string
          id: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          icon: string
          id?: string
          name: string
          value: string
        }
        Update: {
          created_at?: string
          icon?: string
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      user_sports: {
        Row: {
          created_at: string
          id: string
          sport_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          sport_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          sport_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_sports_sport_id_fkey"
            columns: ["sport_id"]
            isOneToOne: false
            referencedRelation: "sports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_sports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
